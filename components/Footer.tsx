import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="upper">
          <div>
            <Link href="/">
              <Image src="./logo.svg" height={40} width={40} alt="logo" />
              <h4>The next design</h4>
            </Link>
            <p>
              The copy warned the Little Blind Text, that where it came from it
              would have been rewritten a thousand times.
            </p>
          </div>
          <ul>
            <li><h4>Company</h4></li>
            <li><Link href="/">About</Link></li>
            <li><Link href="/">Terms of</Link></li>
            <li><Link href="/">Privacy</Link></li>
            <li><Link href="/">How it</Link></li>
            <li><Link href="/">Contact us</Link></li>
          </ul>
          <ul>
            <li><h4>Get help</h4></li>
            <li><Link href="/">Support</Link></li>
            <li><Link href="/">24H</Link></li>
            <li><Link href="/">Quick</Link></li>
          </ul>
          <ul>
            <li><h4>Support</h4></li>
            <li><Link href="/">FA</Link></li>
            <li><Link href="/">Policy</Link></li>
            <li><Link href="/">Business</Link></li>
          </ul>
          <ul>
            <li><h4>Contact us</h4></li>
            <li><Link href="/">What'sApp</Link></li>
            <li><Link href="/">Support 24H</Link></li>
          </ul>
        </div>
        <div className="down">
          <p>CopyRights &copy; 2024</p>
          <p>Designed by ARShakir coded by Abdullah Ahmed</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
