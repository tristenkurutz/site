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
         the width of "!"). Lengths rather than display so it animates in every
         browser; line-height goes to 0 too because a zero-size inline box with
         a real line-height still centers its leading on the baseline and grows
         the line. */
      reveal: {
        from: { fontSize: "0", lineHeight: "0" },
        to: { fontSize: "1em", lineHeight: "inherit" },
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
      // cursor alone at the start, before the first letter. 1ms rather than 0s
      // so the animation actually runs and the end state applies.
      reveal: "reveal 1ms step-end both",
      cursor: "blink .7s step-end 4, hideCursor 0s linear 2.8s forwards",
    },
  },
};
export const plugins = [
  function ({ addVariant }) {
    addVariant("contrast", ".high-contrast &");
  },
];
