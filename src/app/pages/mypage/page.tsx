import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { isLoginHref } from "@/storage/href";
import { unLoginHref } from "@/storage/href";

export default function Mypage() {
  const isLogin = true;
  return (
    <div id="wrap">
      <header id="header">
        <Header />
      </header>
      <nav id="nav">
        <Navigation hrefProps={isLogin ? isLoginHref : unLoginHref} />
      </nav>
      <main id="main">
        <div id="content">
          <h1>마이페이지 컴포넌트</h1>
        </div>
      </main>
      <footer id="footer">
        <Footer />
      </footer>
    </div>
  );
}
