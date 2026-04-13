import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Yeh line page ko top par le jayegi har route change par
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}