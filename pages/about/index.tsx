import Link from 'next/link';

function About() {
  return (
    <>
      <ul>
        <li>
          <Link href="/about/about-us" prefetch>
            About Us
          </Link>
        </li>
        <li>
          <Link href="/about/about-me" prefetch>
            About Me
          </Link>
        </li>
        <li>
          <Link href="/contact-us" prefetch>
            Contact Us
          </Link>
        </li>
      </ul>
      <section>About</section>
    </>
  );
}

export default About;
