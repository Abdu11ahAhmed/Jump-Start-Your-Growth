import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";
import HomeImage from "../public/homeImage.png";
import company1 from "../public/stack.svg";
import company2 from "../public/amazon.svg";
import company3 from "../public/ecommerce.svg";
import company4 from "../public/undies.svg";
import company5 from "../public/sitepoint.svg";
import section3icon1 from "../public/sectionThree-icon1.svg";
import section3icon2 from "../public/sectionThree-icon2.svg";
import section4icon1 from "../public/sectionFour-icon1.svg";
import section4icon2 from "../public/sectionFour-icon2.svg";
import section4icon3 from "../public/sectionFour-icon3.svg";
import section5 from "../public/sectionsfive.svg";
import section6 from "../public/sectionsix.svg";
import checked from "../public/Icon.svg";
import section81 from "../public/sectionEight-icon1.svg";
import section82 from "../public/sectionEight-icon2.svg";
import section83 from "../public/sectionEight-icon3.svg";
import section84 from "../public/sectionEight-icon4.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.section1}>
          <div className={styles.text}>
            <span>Jump start your growth</span>
            <h1>
              We boost the growth for <br /> <span>Startup</span> to Fortune 500{" "}
              <br />
              Companies
            </h1>
            <p>
              Get the most accurate leads, sales peopele training and
              conversions, tools and more — all within the same one billing.
            </p>
            <div className={styles.box}>
              <form action="/">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                />
                <button>Go</button>
              </form>
            </div>
          </div>
          <div className={styles.image}>
            <Image
              src={HomeImage}
              height={2000}
              width={2000}
              alt="Home Image"
            />
          </div>
        </div>
        {/* section one */}

        <div className={styles.section2}>
          <Image src={company1} height={100} width={100} alt="companys" />
          <Image src={company2} height={100} width={100} alt="companys" />
          <Image src={company3} height={100} width={100} alt="companys" />
          <Image src={company4} height={100} width={100} alt="companys" />
          <Image src={company5} height={100} width={100} alt="companys" />
        </div>
        {/* section two */}
      </div>
      {/* container  */}

      <div className={styles.section3}>
        <div className={styles.content}>
          <div className={styles.main}>
            <p>achive more</p>
            <h1>
              Purpose of a <br /> convoy is to keep <br /> your team
            </h1>
          </div>
          <div className={styles.list}>
            <Image src={section3icon1} height={100} width={100} alt="icon1" />
            <h3>build for impact</h3>
            <p>
              We identify and nurture a truly diverse team of designers,
              developers and marketers
            </p>
          </div>
          <div className={styles.list}>
            <Image src={section3icon2} height={100} width={100} alt="icon1" />
            <h3>In sync with you</h3>
            <p>
              We work the way you do by adapting to your workflows and rhythm we
              aim to blend in for a seamless.
            </p>
          </div>
        </div>
      </div>
      {/* section3  */}

      <div className={styles.container}>
        <div className={styles.section4}>
          <div className={styles.header}>
            <h2>How can we assest your business</h2>
            <p>When you resell besnik, you build trust and increase</p>
          </div>
          <div className={styles.cards}>
            <div className={styles.card}>
              <Image src={section4icon1} height={100} width={100} alt="icons" />
              <h3>Find out what you need</h3>
              <p>We present you a proposal and discuss nitty- gritty like</p>
            </div>
            <div className={styles.card}>
              <Image src={section4icon2} height={100} width={100} alt="icons" />
              <h3>Work out the details</h3>
              <p>Communication protocols apart from engagement models</p>
            </div>
            <div className={styles.card}>
              <Image src={section4icon3} height={100} width={100} alt="icons" />
              <h3>We get to work fast</h3>
              <p>Protocols apart from engage models, pricing billing</p>
            </div>
          </div>
          <div className={styles.subscribe}>
            <button>Become a partner</button>
          </div>
        </div>
        {/* section4 */}

        <div className={styles.section5}>
          <div className={styles.image}>
            <Image
              src={section5}
              height={20000}
              width={20000}
              alt="sectionimage"
            />
          </div>
          <div className={styles.text}>
            <span>SCHEDULE</span>
            <h2>
              Great customer relationship <br /> starts here
            </h2>
            <p>
              80 days around the world, we’ll find a pot of gold just sitting
              where the rainbow’s ending. Time — we’ll fight against the time,
              and we’ll fly on the white wings of the wind.
            </p>
            <Link href="/">Learn more about publiching</Link>
          </div>
        </div>
        {/* section five */}

        <div className={styles.section5}>
          <div className={styles.text}>
            <span>MONITOR</span>
            <h2>
              Introducing best <br /> mobile carousels
            </h2>
            <p>
              Before the ship is really back. Round, round, all around the
              world. Round, all around the world. Round, all around the world.
              Round, all around the world.
            </p>
            <Link href="/">Learn more about publiching</Link>
          </div>
          <div className={styles.image}>
            <Image
              src={section6}
              height={20000000}
              width={20000000}
              alt="sectionimage"
            />
          </div>
        </div>
        {/* section sex */}
      </div>
      {/* container  */}

      <div className={styles.section7}>
        <div className={styles.content}>
          <h3>Pricing</h3>
          <div className={styles.pricing}>
            <ul>
              <li>
                <p>Starter</p>
                <h4>$4,000/mo</h4>
              </li>
            </ul>
            <ul>
              <li>
                <p>Business</p>
                <h4>$7,500/mo</h4>
              </li>
            </ul>
          </div>
          <div className={styles.barcontent}>
            <div className={styles.bar}>
              <div className={styles.mover}></div>
            </div>
          </div>
          <div className={styles.absoluted}>
            <p>Ready to get start!</p>
            <button>Get started</button>
          </div>
        </div>
      </div>
      {/* section7  */}

      <div className={styles.container}>
        <div className={styles.section8}>
          <div className={styles.text}>
            <h1>
              Future of support with
              <br /> new shape
            </h1>
            <p>
              Discuss your goals, determine success metrics, identify problems
            </p>
            <ul>
              <li>
                <Image src={checked} height={40} width={40} alt="checked" />
                <p>UX design content strategy</p>
              </li>
              <li>
                <Image src={checked} height={40} width={40} alt="checked" />
                <p>Development bring</p>
              </li>
            </ul>
            <button>Get started</button>
          </div>
          <div className={styles.cards}>
            <div className={styles.card}>
              <Image src={section81} height={50} width={50} alt="section8" />
              <h3>web design</h3>
              <p>One for all and all for one, Muskehounds are always ready.</p>
              <Link href="/">load more</Link>
            </div>
            <div className={styles.card}>
              <Image src={section82} height={50} width={50} alt="section8" />
              <h3>Ad-Creatives</h3>
              <p>Alphabet Village and the subline of her own road.</p>
              <Link href="/">load more</Link>
            </div>
            <div className={styles.card}>
              <Image src={section83} height={50} width={50} alt="section8" />
              <h3>Automation</h3>
              <p>Little Blind Text should turn around and return.</p>
              <Link href="/">load more</Link>
            </div>
            <div className={styles.card}>
              <Image src={section84} height={50} width={50} alt="section8" />
              <h3>Infographics</h3>
              <p>Nothing the copy said could convince her.</p>
              <Link href="/">load more</Link>
            </div>
          </div>
        </div>
        {/* section8 */}

        <div className={styles.section9}>
          <Slider />
        </div>
        {/* section9 */}

        <div className={styles.section10}>
          <div className={styles.content}>
            <div className={styles.text}>
              <h2>Subscribe newsletter</h2>
              <p>
                The copy warned the Little Blind Text, that where <br /> it came
                from it would have been rewritten.
              </p>
            </div>
            <div className={styles.discover}>
              <form>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email adress .."
                />
                <button>Discover</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

