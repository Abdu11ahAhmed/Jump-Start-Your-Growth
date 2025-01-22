import Link from "next/link";
import Image from "next/image";

const Navbar = () => {

  return (
    <>
      <nav>
        <Link href="/">
          <Image src="./logo.svg" height={20} width={20} alt="logo" />
        </Link>
        <ul className="navlinks">
          <li>
            <Link href="/">About Us</Link>
            <Link href="/">Our Services</Link>
            <Link href="/">The Team</Link>
            <Link href="/">Portfolio</Link>
            <Link href="/">Get In Touch</Link>
          </li>
        </ul>
        <div className="humberger"></div>
      </nav>
    </>
  );
};

export default Navbar;
