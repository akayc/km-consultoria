import Image from "next/image";
import { Heart, Compass, Target, ShieldCheck, User, MapPin } from "lucide-react";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/sections/Section";
import { Cards } from "@/components/sections/Cards";
import { TagList } from "@/components/sections/TagList";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

const WHATSAPP = "5575999845134"; // (75) 9 9984-5134 — confirmar número principal com a Karina

const Logo = () => (
  <span className="flex items-center gap-2">
    <Image src="/images/logo.png" alt="KM Consultoria" width={32} height={22} className="h-6 w-auto" />
    <span className="text-base font-semibold tracking-tight">KM Consultoria</span>
  </span>
);

export default function Home() {
  return (
    <>
      <Navbar
        logo={<Logo />}
        links={[
          { label: "Sobre", href: "#sobre" },
          { label: "Diferencial", href: "#diferencial" },
          { label: "Serviços", href: "#servicos" },
          { label: "Equipe", href: "#equipe" },
          { label: "Contato", href: "#contato" },
        ]}
        ctaLabel="Fale conosco"
        ctaHref="#contato"
      />

      <main>
        <Hero
          eyebrow="Consultoria em Serviços Médicos e de Saúde desde 2017"
          title="Gestão qualificada para fortalecer a saúde pública e privada"
          description="A KM Consultoria gerencia, organiza e coordena unidades de saúde — hospitais, policlínicas, PSF, UBS, CAPS e demais órgãos — com profissionais qualificados e atendimento humanizado."
          primaryCta={{ label: "Falar no WhatsApp", href: `https://wa.me/${WHATSAPP}` }}
          secondaryCta={{ label: "Conhecer a KM", href: "#sobre" }}
          image={{
            src: "/images/karina-hero.png",
            alt: "Karina Michelle Oliveira, Diretora Executiva da KM Consultoria",
          }}
        />

        <Section id="sobre" eyebrow="Sobre nós" title="Quem é a KM Consultoria">
          <p>
            A KM Consultoria em Serviços Médicos e de Saúde é uma empresa que
            surgiu no intuito de fortalecer as atividades de apoio à saúde,
            em busca de melhorias na gestão, coordenação, organização e
            execução de serviços — preservando a qualidade da saúde dos
            municípios onde atua.
          </p>
          <p>
            Somos especialistas em gerenciar unidades de saúde, ofertando aos
            setores públicos e privados profissionais qualificados. Estamos
            no mercado desde 2017, atuando em municípios da Bahia.
          </p>
        </Section>

        <Section
          id="diferencial"
          eyebrow="Nosso diferencial"
          title="Respostas rápidas e confiáveis para a gestão da saúde"
          tone="surface"
        >
          <p>
            O mundo contemporâneo exige dos profissionais de saúde respostas
            rápidas, confiáveis e soluções eficazes para os desafios do dia a
            dia. Desenvolvemos um trabalho eficiente e qualificado, com
            equipe de consultoria especializada e preparada para gerenciar,
            organizar e coordenar unidades de saúde — tais como hospitais,
            policlínicas, PSF, UBS, CAPS e demais órgãos onde se faz
            necessário o profissional de gestão qualificada.
          </p>
        </Section>

        <Cards
          eyebrow="Institucional"
          title="Propósito, visão, missão e valores"
          columns={2}
          decor
          items={[
            {
              title: "Propósito",
              description:
                "Garantir um atendimento de qualidade, humanizado e eficiente para transformar vidas.",
              icon: Heart,
            },
            {
              title: "Visão",
              description:
                "Ser referência na gestão hospitalar, promovendo inovação e excelência na saúde.",
              icon: Compass,
            },
            {
              title: "Missão",
              description:
                "Oferecer soluções estratégicas para otimizar processos, melhorar a assistência e valorizar os profissionais da saúde.",
              icon: Target,
            },
            {
              title: "Valores",
              description:
                "Ética, respeito, eficiência, acolhimento e valorização do indivíduo como um todo, com compromisso pelo bem-estar dos pacientes.",
              icon: ShieldCheck,
            },
          ]}
        />

        <TagList
          id="servicos"
          eyebrow="Serviços"
          title="Terceirização e gestão de profissionais de saúde"
          description="Consultas e exames em diversas especialidades, com profissionais qualificados para atuação em unidades públicas e privadas."
          tone="surface"
          groups={[
            {
              label: "Prestadores de serviços de saúde",
              tags: [
                "Médico",
                "Enfermeiro",
                "Psicólogo",
                "Nutricionista",
                "Fisioterapeuta",
                "Fonoaudiólogo",
                "Odontologista",
                "Assistente social",
                "Bioquímicos",
                "Profissionais de apoio à saúde",
              ],
            },
            {
              label: "Especialidades médicas",
              tags: [
                "Médico clínico",
                "Gastroenterologia",
                "Cirurgião geral",
                "Endocrinologia",
                "Cardiologista",
                "Psiquiatria",
                "Ortopedia",
                "Geriatria",
              ],
            },
            {
              label: "Serviços e exames",
              tags: ["Laboratório", "ECG — Eletrocardiograma", "EDA — Endoscopia", "USG — Ultrassonografia"],
            },
          ]}
        />

        <Cards
          id="cidades"
          eyebrow="Trajetória"
          title="Cidades onde já atuamos"
          columns={3}
          items={[
            {
              title: "Capim Grosso",
              description: "Consultoria e prestação de serviços na UPA.",
              icon: MapPin,
            },
            {
              title: "Ourolândia",
              description:
                "Gerenciamento hospitalar, atenção básica e assistência social no Hospital Municipal e na Unidade de Saúde.",
              icon: MapPin,
            },
            {
              title: "Várzea Nova",
              description:
                "Serviços médicos, hospitalar, atenção básica e Centro de Doenças Respiratórias (Covid-19).",
              icon: MapPin,
            },
          ]}
        />

        <Section
          eyebrow="Diretora Executiva"
          title="Karina Michelle Oliveira"
          tone="surface"
          decor
          image={{
            src: "/images/karina-perfil.jpg",
            alt: "Karina Michelle Oliveira",
          }}
          imageSide="left"
        >
          <p>
            Enfermeira, Pós-graduada em Gestão Pública, com MBA em Gestão
            Hospitalar e Serviços de Saúde.
          </p>
          <p>
            Já atuou como Coordenadora Administrativa da atenção básica no
            Município de Riachão do Jacuípe, Diretora Administrativa do
            Hospital Municipal de Riachão do Jacuípe, Diretora do Hospital
            Municipal de Itiúba e Coordenadora da atenção básica. Foi também
            Responsável Técnica do Instituto Médico e Cirúrgico da Bahia
            (IMC), Assessora Técnica na atenção à saúde dos municípios de
            Piraí do Norte e Ourolândia, Enfermeira plantonista no Hospital
            Municipal de Ourolândia e Coordenadora do Centro de Covid-19 do
            Município de Várzea Nova.
          </p>
          <p>
            Atualmente é Diretora Executiva da KM Consultoria em Serviços
            Médicos e de Saúde e Coordenadora de Enfermagem do Hospital
            Municipal Florisvaldo Josuel do Araújo.
          </p>
        </Section>

        <Cards
          id="equipe"
          eyebrow="Equipe"
          title="Quem toca a KM Consultoria"
          columns={3}
          items={[
            {
              title: "Karina Michelle Oliveira",
              description: "Enfermeira · Diretora Executiva",
              photo: { src: "/images/karina-perfil.jpg", alt: "Karina Michelle Oliveira" },
            },
            {
              title: "Kayc",
              description: "Engenheiro da Computação (em formação) · Tecnologia",
              icon: User,
            },
            {
              title: "Marlla",
              description: "Médica Clínica",
              photo: { src: "/images/marlla.jpg", alt: "Marlla" },
            },
          ]}
        />

        <Contact
          id="contato"
          title="Fale com a KM Consultoria"
          description="Atendimento a prefeituras, gestão pública e unidades de saúde. Resposta rápida pelo WhatsApp."
          whatsapp={WHATSAPP}
          phone="(75) 9 9984-5134"
          email="karinaenfa20@hotmail.com"
          address="Rua Mon Senhor, nº 380 — Bairro Planaltino, Capim Grosso — BA, CEP 44.645-000"
        />
      </main>

      <Footer
        logo={<Logo />}
        tagline="Consultoria em Serviços Médicos e de Saúde"
        links={[{ label: "Contato", href: "#contato" }]}
      />
      <WhatsAppButton phone={WHATSAPP} floating />
    </>
  );
}
