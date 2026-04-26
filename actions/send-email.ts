"use server";

import nodemailer from "nodemailer";
import { contactSchema } from "@/lib/contact-schema";

export async function sendEmail(values: unknown) {
  const parsed = contactSchema.safeParse(values);

  if (!parsed.success) {
    return {
      success: false,
      fieldErrors: parsed.error.flatten().fieldErrors,
    };
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `New Message from ${parsed.data.name}`,
      replyTo: parsed.data.email,
      html: `
        <h3>New Contact Message</h3>
        <p><strong>Name:</strong> ${parsed.data.name}</p>
        <p><strong>Email:</strong> ${parsed.data.email}</p>
        <p>${parsed.data.message}</p>
      `,
    });
    return {
      success: true,
      message: "Your message has been sent successfully!",
    };
  } catch (error) {
    console.log("Error sending email:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    };
  }
}
