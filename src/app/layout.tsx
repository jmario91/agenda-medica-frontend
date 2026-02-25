import "./globals.css";
import type { Metadata } from "next";
 import { Providers } from "./providers"

export const metadata: Metadata = {
  title: "Agenda Médica Pro",
  description: "Sistema profesional de agenda médica",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}

// import "./globals.css"
// import { Providers } from "./providers"

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="es">
//       <body>
//         <Providers>
//           {children}
//         </Providers>
//       </body>
//     </html>
//   )
// }
