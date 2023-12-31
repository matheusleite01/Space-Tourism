"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavlinkProps = React.PropsWithChildren<{
  activeClassname: string;
  href: string;
  isOpen: Boolean;
  setIsopen: React.Dispatch<React.SetStateAction<boolean>>;
}>;

const NavLink = ({
  isOpen,
  setIsopen,
  activeClassname,
  ...props
}: NavlinkProps) => {
  const pathname = usePathname();
  const active = pathname === props.href;

  return (
    <Link
      className={`${active ? activeClassname : ""} ${isOpen ? "open" : ""}`} onClick={() => setIsopen(false)}
      {...props}
    />
  );
};

export default NavLink;
