/**
 * The project uses inline generated SVG data URLs for car visuals.
 * This keeps the starter project self-contained without needing external assets.
 */
export function createCarImage({
  body,
  accent,
  glow,
}: {
  body: string
  accent: string
  glow: string
}) {
  const svg = `
    <svg width="920" height="420" viewBox="0 0 920 420" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="paint" x1="160" y1="80" x2="760" y2="320" gradientUnits="userSpaceOnUse">
          <stop stop-color="${body}" />
          <stop offset="1" stop-color="${accent}" />
        </linearGradient>
        <radialGradient id="glow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(460 340) rotate(90) scale(80 320)">
          <stop stop-color="${glow}" stop-opacity="0.55" />
          <stop offset="1" stop-color="${glow}" stop-opacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="460" cy="340" rx="300" ry="60" fill="url(#glow)" />
      <path d="M195 274C206 239 246 176 320 165L539 142C596 136 650 153 696 188L777 249C793 260 802 278 802 297V312H128V296C128 286 131 277 137 270L195 274Z" fill="url(#paint)" />
      <path d="M299 173L386 113H565C606 113 643 128 673 157L718 202H587L534 151L367 156L310 203H219L257 185C272 178 285 174 299 173Z" fill="#DCE7F5" fill-opacity="0.95" />
      <path d="M198 272H128C128 258 133 245 143 235L183 197H241L198 272Z" fill="${accent}" fill-opacity="0.95" />
      <path d="M789 312H126V324H789V312Z" fill="#0F172A" fill-opacity="0.24" />
      <path d="M713 237L776 248C786 252 795 261 798 273H705L713 237Z" fill="${accent}" fill-opacity="0.9" />
      <circle cx="268" cy="314" r="48" fill="#111827" />
      <circle cx="268" cy="314" r="27" fill="#CBD5E1" />
      <circle cx="663" cy="314" r="48" fill="#111827" />
      <circle cx="663" cy="314" r="27" fill="#CBD5E1" />
      <path d="M742 227H768C778 227 786 235 786 245V247H734L742 227Z" fill="#F8FAFC" fill-opacity="0.9" />
      <path d="M170 261H210L194 284H150L170 261Z" fill="#FDE68A" fill-opacity="0.95" />
      <path d="M453 143C488 143 522 156 548 181L585 218H315L355 170C370 152 391 143 414 143H453Z" fill="#F8FAFC" fill-opacity="0.84" />
      <path d="M383 114H567" stroke="#94A3B8" stroke-width="4" stroke-linecap="round" />
      <path d="M321 218H585" stroke="#64748B" stroke-opacity="0.48" stroke-width="3" />
    </svg>
  `

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`
}
