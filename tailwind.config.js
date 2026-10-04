export const content = ["./src/**/*.{html,js,svelte,ts}"];
export const theme = {
  extend: {
    fontFamily: {
      myfont: ["GT Walsheim Pro Black", "sans-serif"],
    },
    /** This tailwind animation is created by Samuel Dawson
     * https://tailwindflex.com/@samuel33/typewriter-animation-effect
     **/
    keyframes: {
      /* Each character is absent until its own delay, so the cursor lands on
         real glyph boundaries. Animating the container's width instead divides
         it evenly, which never matches a proportional font ("H" is five times
         the width of "!"). display rather than font-size: a zero-size inline
         box still centers its leading on the baseline and grows the line. */
      reveal: {
        from: { display: "none" },
        to: { display: "inline" },
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
      // "both" so each character stays absent through its delay, leaving the
      // cursor alone at the start, before the first letter
      reveal: "reveal 0s step-end both",
      cursor: "blink .7s step-end 4, hideCursor 0s linear 2.8s forwards",
    },
  },
};
export const plugins = [
  function ({ addVariant }) {
    addVariant("contrast", ".high-contrast &");
  },
];
