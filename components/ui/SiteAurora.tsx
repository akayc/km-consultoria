// Fundo global, fixo atrás de todo o conteúdo (não rola com a página).
// Antes cada section decidia seu próprio bg (branco / cinza / blobs isolados);
// agora é uma única camada contínua do topo ao fim do site — por isso a
// intensidade aqui é bem mais sutil do que a Hero usava sozinha.
export function SiteAurora() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-bg">
      <div
        className="
          absolute -inset-[10px] opacity-[0.16] blur-[10px] will-change-transform
          [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)]
          [--aurora:repeating-linear-gradient(100deg,var(--blue-500)_10%,var(--indigo-300)_15%,var(--blue-300)_20%,var(--violet-200)_25%,var(--blue-400)_30%)]
          [background-image:var(--white-gradient),var(--aurora)]
          [background-size:300%,_200%]
          [background-position:50%_50%,50%_50%]
          after:absolute after:inset-0 after:content-['']
          after:[background-image:var(--white-gradient),var(--aurora)]
          after:[background-size:200%,_100%]
          after:animate-aurora
        "
      />
      {/* textura de pontos discreta, presente do início ao fim — tira o "branco cru" sem virar padrão chapado */}
      <div className="absolute inset-0 bg-dot-grid opacity-60" />
    </div>
  );
}
