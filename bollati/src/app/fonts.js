import localFont from "next/font/local";

export const aptos = localFont({
  src: [
    {
      path: "../../public/fonts/Aptos.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Aptos-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-aptos",
});
