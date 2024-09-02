import { Roboto, Libre_Baskerville } from "next/font/google";

// Load the Roboto font
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

// Load the Libre Baskerville font
const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

export { roboto, libreBaskerville };
