"use client";
import * as H from "./styled";
import React from "react";
import Logo from "@/assets/shared/Logo";
import Link from "next/link";
import IconHanburger from "@/assets/shared/IconHanburger";
import IconClose from "@/assets/shared/IconClose";

const Header = () => {
  const [isOpen, setIsopen] = React.useState(false);

  return (
    <H.Container>
      <Link href="/">
        <Logo />
      </Link>
      <H.MenuBurger onClick={() => setIsopen(!isOpen)}>
        {isOpen ? <IconClose /> : <IconHanburger />}
      </H.MenuBurger>
      <H.NavList className={isOpen ? "open" : ""}>
        <H.List>
          <H.ListItem>
            <Link href="/" className="active open">
              <span>00</span>HOME
            </Link>
          </H.ListItem>
          <H.ListItem>
            <Link href="/destination">
              <span>01</span>DESTINATION
            </Link>
          </H.ListItem>
          <H.ListItem>
            <Link href="/crew">
              <span>02</span>CREW
            </Link>
          </H.ListItem>
          <H.ListItem>
            <Link href="/technology">
              <span>03</span>TECHNOLOGY
            </Link>
          </H.ListItem>
        </H.List>
      </H.NavList>
    </H.Container>
  );
};

export default Header;
