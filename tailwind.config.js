/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{html,js,svelte,ts}"];
export const theme = {
  extend: {
    fontFamily: {
      myfont: ["GT Walsheim Pro Black", "sans-serif"],
    },
    keyframes: {
      typing: {
        "0%": {
          width: "0%",
          visibility: "hidden",
        },
        "100%": {
          width: "6ch",
        },
      },
      blink: {
        "50%": {
          borderColor: "transparent",
        },
        "100%": {
          borderColor: "white",
        },
      },
      hideCursor: {
        "100%": { borderColor: "transparent" },
      },
    },
    animation: {
      typing:
        "typing 0.75s steps(6) forwards, blink .7s step-end 4, hideCursor 0s linear 2.8s forwards",
    },
  },
};
export const plugins = [];
