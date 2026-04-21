import "./globals.css"; // <--- ESTA LÍNEA ES CRÍTICA
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Juan Sebastián Navarro - CV',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}