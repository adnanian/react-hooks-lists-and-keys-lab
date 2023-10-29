import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const navigationLinks = links.map((link) => <a key={link} href={`#${link}`}>{link}</a>);

  return (
    <nav>
      {navigationLinks}
    </nav>
  )
}

export default NavBar;
