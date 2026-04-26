"use server";
import { google } from "googleapis";

export async function listFiles() {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: (process.env.GOOGLE_PRIVATE_KEY || "").replace(
          /\\n/g,
          "\n",
        ),
      },
      scopes: [process.env.GOOGLE_DRIVE_SCOPE as string],
    });

    const drive = google.drive({ version: "v3", auth });
    const folderId = "1CGl57gIpKGBbVT0mRINilhJoJtwUNNYu";
    const response = await drive.files.list({
      pageSize: 1,
      q: `'${folderId}' in parents and trashed=false`,
      fields: "files(id, name, mimeType, modifiedTime)",
    });
    const files = response.data.files;
    if (files?.length) {
      const response = await drive.files.get(
        {
          fileId: files[0].id!,
          alt: "media",
        },
        {
          responseType: "arraybuffer",
        },
      );
      const buffer = Buffer.from(response.data as ArrayBuffer);
      return `data:${response.headers["content-type"]};base64,${buffer.toString("base64")}`;
    } else {
      console.log("No files found.");
    }
  } catch (error) {
    console.error("Error listing files:", error);
    throw error;
  }
}
