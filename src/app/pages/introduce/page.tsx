import Header from "@/components/header/Header";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { introduceHref } from "@/storage/href";

export default function Introduce() {
  return (
    <>
      <nav id="nav">
        <Navigation hrefProps={introduceHref} />
      </nav>
      <main id="main">
        <div id="content">
          <h1>농행동행 컴포넌트</h1>
        </div>
      </main>
    </>
  );
}
