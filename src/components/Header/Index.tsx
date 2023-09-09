"use client";
import * as H from "./styled";
import React from "react";
import Logo from "@/assets/shared/Logo";
import Link from "next/link";
import IconHanburger from "@/assets/shared/IconHanburger";
import IconClose from "@/assets/shared/IconClose";
import NavLink from "../NavLink";

const Header = () => {
  const [isOpen, setIsopen] = React.useState(false);
  const links = [
    {
      id: '01',
      href: "/",
      label: "HOME",
      
    },
    {
      id:'02',
      href: "/destination",
      label: "DESTINATION",
    },
    {
      id:'03',
      href: "/crew",
      label: "CREW",
    },
    {
      id:'04',
      href: "/technology",
      label: "TECHNOLOGY",
    },
  ];

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
          {links.map(({ href, label, id }) => (
            <H.ListItem key={href}>
              <NavLink isOpen={isOpen} activeClassname='active' href={href}>
                <span>{id}</span>
                {label}
                </NavLink>
            </H.ListItem>
          ))}
        </H.List>
      </H.NavList>
    </H.Container>
  );
};

export default Header;
