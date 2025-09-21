export const metadata = {
  title: "ALO Education",
  description: "Your Dream — Our Commitment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif", background: "#fff" }}>
        <header
          style={{
            background: "#0071BC",
            color: "#fff",
            padding: "12px 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ fontWeight: 800, letterSpacing: 0.5 }}>
            ALO <span style={{ color: "#F7931E" }}>Education</span>
          </div>
          <nav style={{ display: "flex", gap: 16 }}>
            <a href="/" style={{ color: "#fff", textDecoration: "none" }}>Home</a>
            <a href="#" style={{ color: "#fff", textDecoration: "none" }}>Services</a>
            <a href="#" style={{ color: "#fff", textDecoration: "none" }}>Contact</a>
          </nav>
        </header>

        <main style={{ maxWidth: 980, margin: "28px auto", padding: "0 16px" }}>
          {children}
        </main>

        <footer
          style={{
            marginTop: 40,
            padding: "16px 20px",
            background: "#f6f8fa",
            borderTop: "1px solid #e5e7eb",
            textAlign: "center",
            color: "#374151",
          }}
        >
          © {new Date().getFullYear()} ALO Education
        </footer>
      </body>
    </html>
  );
}
