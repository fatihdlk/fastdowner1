import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SchemaInjector from "../components/SchemaInjector";
import globalSchema from "../components/global-schema.json";

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <head>
        <SchemaInjector jsonld={globalSchema} />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
