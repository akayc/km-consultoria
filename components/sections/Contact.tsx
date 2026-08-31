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
    <section id={id} className="py-20 md:py-28">
      <Container className="grid gap-12 md:grid-cols-2">
        <Reveal>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
          {description && <p className="mt-4 max-w-md text-muted">{description}</p>}
          {whatsapp && (
            <div className="mt-8">
              <WhatsAppButton phone={whatsapp} />
            </div>
          )}
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="space-y-4 text-sm">
            {phone && (
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" strokeWidth={1.5} />
                {phone}
              </li>
            )}
            {email && (
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" strokeWidth={1.5} />
                {email}
              </li>
            )}
            {address && (
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" strokeWidth={1.5} />
                {address}
              </li>
            )}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
