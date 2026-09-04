import { Mail, MapPin, Phone } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

type ContactProps = {
  id?: string;
  title: string;
  description?: string;
  whatsapp?: string; // 5573999999999
  phone?: string;
  email?: string;
  address?: string;
};

export function Contact({
  id,
  title,
  description,
  whatsapp,
  phone,
  email,
  address,
}: ContactProps) {
  return (
    <section id={id} className="relative overflow-hidden bg-[#0b405e] py-20 text-white md:py-24">
      <div aria-hidden className="absolute -right-24 -top-24 h-80 w-80 rounded-full border-[36px] border-white/5" />
      <div aria-hidden className="absolute -bottom-32 left-[38%] h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
      <Container className="relative grid gap-12 md:grid-cols-2">
        <Reveal>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
          {description && <p className="mt-4 max-w-md text-white/75">{description}</p>}
          {whatsapp && (
            <div className="mt-8">
              <WhatsAppButton phone={whatsapp} />
            </div>
          )}
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-5 text-sm backdrop-blur-sm md:p-8">
            {phone && (
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#8fd4f3]" strokeWidth={1.5} />
                {phone}
              </li>
            )}
            {email && (
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#8fd4f3]" strokeWidth={1.5} />
                {email}
              </li>
            )}
            {address && (
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#8fd4f3]" strokeWidth={1.5} />
                {address}
              </li>
            )}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
