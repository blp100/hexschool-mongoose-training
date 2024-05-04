/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        notoSans: ["var(--font-noto-sans-tc)"],
        paytone: ["var(--font-paytone-one)"],
        azeretMono: ["var(--font-azeret-mono)"],
      },
    },
  },
  plugins: [],
};
