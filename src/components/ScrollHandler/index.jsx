import { useEffect } from "react";
import { matchPath, useLocation } from "react-router-dom";

export function ScrollHandler() {
  const { pathname, hash } = useLocation();

  useEffect(() => {

    const isDetailsPage = matchPath('/details/:id', pathname);
    if (isDetailsPage) return

    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth'});
      }
     } else {
        window.scrollTo(0,0)
      }
    }, [pathname, hash]);
  
  return null;
}