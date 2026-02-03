import "./globals.scss";
import { aptos } from "./fonts";

export const metadata = {
  title: "Bollati Abogados",
  description: "Estudio Juridico",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={aptos.variable}>
      <body>{children}</body>
    </html>
  );
}
