import { MessageCircle } from "lucide-react";

type WhatsAppButtonProps = {
  phone: string; // formato: 5573999999999 (só números, com DDI+DDD)
  message?: string;
  floating?: boolean;
};

export function WhatsAppButton({
  phone,
  message = "Olá! Vim pelo site e gostaria de mais informações.",
  floating = false,
}: WhatsAppButtonProps) {
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  if (floating) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105"
      >
        <MessageCircle className="h-7 w-7" fill="currentColor" strokeWidth={0} />
      </a>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-2 rounded-md bg-[#25D366] px-5 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
    >
      <MessageCircle className="h-4 w-4" />
      Falar no WhatsApp
    </a>
  );
}
