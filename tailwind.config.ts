/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "deep-blue": "#1F3BB3",
        "grayish-white": "#f4f5f7",
      },
    },
  },
  plugins: [],
});
