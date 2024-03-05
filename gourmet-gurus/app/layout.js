import "./globals.css";
import ResponsiveAppBar from "../components/navbar/ResponsiveAppBar";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ position: "relative", minHeight: "100vh", paddingBottom: "50px" }}>
        <div style={{ marginBottom: "50px" }}>
          <ResponsiveAppBar />
          {children}
        </div>

        <footer
          className="bg-black text-center dark:bg-black lg:text-left"
          style={{
            position: "fixed",
            bottom: 0,
            width: "100%",
            zIndex: 9999,
          }}
        >
          <div className="p-4 text-left text-neutral-700 dark:text-neutral-200">
            © 2024 Copyright:
            <a
              className="text-neutral-800 dark:text-neutral-400"
              href="/about"
            > Gourmet Gurus --- About Us</a>
          </div>
        </footer>
      </body>
    </html>
  );
}
