import Link from "next/link";
import Image from "next/image";
const HeaderPage = () => {
  return (
    <header>
      <div>
        <Image/>
        <nav>
          <img />
          <Link href="/" passHref>
            Home
          </Link>
          <Link href="/event" passHref>
            Event
          </Link>
          <Link href="/about_us" passHref>
            About_us
          </Link>
        </nav>
      </div>
    </header>
  );
};
export default HeaderPage;
