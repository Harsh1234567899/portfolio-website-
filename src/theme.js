

const theme = {
  // ── Backgrounds ──────────────────────────────────────────
  bgPrimary:       'bg-white',           // 60% — main sections
  bgSecondary:     'bg-gray-600',        // 30% — navbar, alt sections, footer
  bgAccent:        'bg-black',           // 10% — strong accent blocks
  bgCardPrimary:   'bg-white',           // cards on white section
  bgCardSecondary: 'bg-gray-700',        // cards on gray section
  bgInput:         'bg-white',           // form inputs

  // ── Text ─────────────────────────────────────────────────
  textHeading:     'text-gray-900',      // headings on white bg
  textBody:        'text-gray-700',      // body text on white bg
  textMuted:       'text-gray-500',      // sub-text on white bg
  textOnSecondary: 'text-black',         // any text on gray-600 bg
  textOnAccent:    'text-white',         // text on black bg
  textAccent:      'text-black',         // accent-colored text on white
  textSubAccent:   'text-gray-300',      // muted text on gray-600 bg
  textHighlight:   'text-gray-200',      // strong text on dark bg

  // ── Borders ───────────────────────────────────────────────
  borderPrimary:   'border-gray-200',    // card/input borders on white
  borderSecondary: 'border-gray-500',    // borders on gray section
  borderAccent:    'border-black',       // accent borders

  // ── Buttons ───────────────────────────────────────────────
  btnPrimary:      'bg-black text-white hover:bg-gray-800 transition',
  btnOutline:      'border-2 border-black text-black hover:bg-black hover:text-white transition',
  btnDisabled:     'bg-gray-400 text-white cursor-not-allowed',

  // ── Navbar ────────────────────────────────────────────────
  navBg:           'bg-white/70 backdrop-blur-md border-b border-gray-200/50', // transparent glass navbar
  navText:         'text-gray-800',      // nav links
  navHover:        'hover:text-black',   // nav link hover — accent

  // ── Footer ────────────────────────────────────────────────
  footerBg:        'bg-gray-600',        // footer bg (30% secondary)
  footerText:      'text-white',         // footer text

  // ── Logo / Brand ─────────────────────────────────────────
  brandText:       'text-black',         // logo on navbar bg → use white
  brandTextNav:    'text-gray-900 font-extrabold', // brand on transparent navbar

  // ── Cards ─────────────────────────────────────────────────
  cardOnWhite:     'bg-white border border-gray-200 shadow-md',
  cardOnGray:      'bg-white border border-gray-100 shadow-md',
  cardHoverWhite:  'hover:border-gray-900 hover:shadow-lg hover:-translate-y-1 transition-all duration-300',
  cardHoverGray:   'hover:border-gray-900 hover:shadow-xl hover:scale-105 transition-all duration-300',

  // ── Inputs ────────────────────────────────────────────────
  inputBase:       'border border-gray-300 rounded-lg p-3 w-full text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-black placeholder-gray-400',

  // ── Section divider alternation ───────────────────────────
  sectionWhite:    'bg-white',
  sectionGray:     'bg-gray-500',

  // ── Ring / Focus ─────────────────────────────────────────
  focusRing:       'focus:ring-2 focus:ring-black',

  // ── Profile image border ──────────────────────────────────
  imgBorder:       'border-4 border-gray-700 shadow-[0_20px_50px_rgba(0,_0,_0,_0.7)]',

  // ── Tags / Badges ─────────────────────────────────────────
  badge:           'bg-gray-100 border border-gray-300 text-gray-800 text-xs px-3 py-1 rounded-full font-medium',

  // ── Modal ─────────────────────────────────────────────────
  modalOverlay:    'bg-black/80 backdrop-blur-sm',
  modalBg:         'bg-white text-gray-800',
  modalClose:      'bg-gray-100 hover:bg-gray-200 text-gray-900',
};

export default theme;


