// This layout is used as a fallback when the locale-specific layout cannot be rendered
// (e.g., during 404s or redirects)

export const metadata = {
  title: 'Eastel 5G',
  description: 'Fastest Prepaid 5G Plan & Free International Roaming'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
