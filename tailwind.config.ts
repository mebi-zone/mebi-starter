import type { Config } from 'tailwindcss'

export default {
    // ...
  safelist: [
    'border-olive','bg-olive/10','text-olive',
    'border-mustard','bg-mustard/10','text-mustard',
    'border-earth','bg-earth/10','text-earth',
    'border-charcoal','bg-charcoal/10','text-charcoal',
  ],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./content/**/*.{md,mdx}"],
  theme: {
    extend: {
      colors: {
        olive: "#2E522B",
        mustard: "#D4A017",
        earth: "#8B5E34",
        sand: "#E7DCCB",
        amberx: "#B86A19",
        charcoal: "#2F2B24",
        offwhite: "#F5EFE6",
      },
      fontFamily: {
        heading: ["ui-sans-serif", "system-ui", "Segoe UI", "Helvetica", "Arial"],
        body: ["ui-sans-serif", "system-ui", "Segoe UI", "Helvetica", "Arial"],
      },
      borderRadius: { 'xl2': "1rem" }
    },
  },


  plugins: [require('@tailwindcss/typography')],
} satisfies Config

