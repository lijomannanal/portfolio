export default function SocialIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <div className="h-8 w-8 flex items-center justify-center text-sm font-semibold cursor-pointer hover:bg-primary transition-colors">
      {icon}
    </div>
  );
}
