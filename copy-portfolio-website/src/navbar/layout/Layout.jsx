import { Outlet } from "react-router-dom";
import NavbarLink from "../Navbarlink";
import Footer from "../../footer/footer";
import ScrollToTop from "../../scorlltop/scrollToTop";
import ScrollToTopButton from "../../scorlltop/ScrollToTopButton";
import Chat from "../../chat/chat";

export default function Layout() {

  return (
    <>
      <header>
        <ScrollToTop />
        <NavbarLink />
      </header>

      <main className="">
        <Outlet />
        <Footer />
      </main>

      <Chat />
      <ScrollToTopButton />
    </>
  );
}