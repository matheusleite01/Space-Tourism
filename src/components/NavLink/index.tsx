'use client'
import Link from "next/link";
import { usePathname } from "next/navigation"

type NavlinkProps = React.PropsWithChildren<{
  activeClassname: string;
  href: string;
  isOpen: Boolean;
}>

const NavLink = ({isOpen,activeClassname,...props}: NavlinkProps) => {
  const pathname = usePathname();
  const active = pathname === props.href;
  
  return (
    <Link className={`${active ? activeClassname : ''} ${isOpen ? 'open' : ''}`} {...props}/>
  )
}

export default NavLink