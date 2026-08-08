/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        paper: '#FCFCFC',
        panel: '#FFFFFF',
        panel2: '#E6E9EE',
        ink: '#3C3F5E',
        slate: '#7F828E',
        line: '#D8DDE6',
        navy: '#1F2430',
        graphite: '#3C3F5E',
        // Legacy token names kept so existing pages don't break —
        // repointed to the AISC functional color system (closest yet to the real logo gradient).
        blue: '#6366F1',    // Primary Brand Blue — nav, buttons, links, charts
        cyan: '#00A8C8',    // Agent Cyan — integrations, connector directory
        purple: '#A855F7',  // Brand Purple — AI engine, workflow diagrams
        pink: '#EC4899',    // Brand Pink — premium highlights/badges only
        cta: '#6366F1',
        // Agent-specific functional colors (new — used for per-agent identity)
        agentGreen: '#3B7E1D',
        agentOrange: '#F28C28',
        agentRed: '#CA4234',
        agentCyan: '#00A8C8',
        // Semantic tokens
        primary: '#6366F1',
        secondary: '#A855F7',
        accent: '#EC4899',
        background: '#FCFCFC',
        surface: '#FFFFFF',
        'surface-2': '#E6E9EE',
        border: '#D8DDE6',
        muted: '#7F828E',
        text: '#3C3F5E',
        positive: '#3B7E1D',
        warning: '#F28C28',
        danger: '#CA4234',
        info: '#00A8C8',
      },
      fontFamily: {
        display: ['var(--font-poppins)', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      fontSize: {
        hero: ['4rem', { lineHeight: '1.05', letterSpacing: '-0.02em', fontWeight: '700' }],
        display: ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '600' }],
        h1: ['2.5rem', { lineHeight: '1.15', letterSpacing: '-0.015em', fontWeight: '600' }],
        h2: ['2rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '600' }],
        h3: ['1.5rem', { lineHeight: '1.3', fontWeight: '600' }],
        h4: ['1.125rem', { lineHeight: '1.4', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.65' }],
        body: ['1rem', { lineHeight: '1.6' }],
        'body-sm': ['0.875rem', { lineHeight: '1.55' }],
        caption: ['0.75rem', { lineHeight: '1.4' }],
        label: ['0.6875rem', { lineHeight: '1.3', letterSpacing: '0.06em' }],
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        30: '7.5rem',
      },
      maxWidth: {
        container: '1180px',
      },
      borderRadius: {
        token: '20px',
      },
      backgroundImage: {
        // Real gradient now (was two identical stops faking a flat color) — used only for
        // decorative/informational accents (progress bars, orchestration bubbles), NEVER on
        // conversion CTA buttons, which stay solid `bg-cta` per standing brand rule.
        'brand-gradient': 'linear-gradient(90deg, #A855F7, #EC4899)',
        'brand-gradient-soft': 'linear-gradient(135deg, rgba(99,102,241,0.12), rgba(168,85,247,0.12))',
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};

