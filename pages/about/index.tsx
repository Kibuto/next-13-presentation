import Link from 'next/link';

function About() {
  return (
    <>
      <ul>
        <li>
          <Link href="/about/about-us">About Us</Link>
        </li>
        <li>
          <Link href="/about/about-me">About Me</Link>
        </li>
        <li>
          <Link href="/about/about-ssr">About SSR</Link>
        </li>
        <li>
          <Link href="/about/about-ssr-wait">About SSR Wait 3s</Link>
        </li>
        <li>
          <Link href="/contact-us">Contact Us</Link>
        </li>
      </ul>
      <section>About</section>
    </>
  );
}

export default About;
