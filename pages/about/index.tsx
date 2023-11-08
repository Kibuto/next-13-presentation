import Link from 'next/link';

function About() {
  return (
    <>
      <ul>
        <li>
          <Link href="/about/about-us" prefetch={false}>
            About Us
          </Link>
        </li>
        <li>
          <Link href="/about/about-me" prefetch={false}>
            About Me
          </Link>
        </li>
        <li>
          <Link href="/about/about-ssr" prefetch={false}>
            About SSR
          </Link>
        </li>
        <li>
          <Link href="/contact-us" prefetch={false}>
            Contact Us
          </Link>
        </li>
      </ul>
      <section>About</section>
    </>
  );
}

export default About;
