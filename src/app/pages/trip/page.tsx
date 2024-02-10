import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { tripHref } from "@/storage/href";

export default function Travel() {
  return (
    <div id="wrap">
      <header id="header">
        <Header />
      </header>
      <nav id="nav">
        <Navigation hrefProps={tripHref} />
      </nav>
      <main id="main">
        <div id="content">
          <h1>농촌여행 컴포넌트</h1>
        </div>
      </main>
      <footer id="footer">
        <Footer />
      </footer>
    </div>
  );
}