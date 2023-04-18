import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
  return (
    <div id="meow" className="logout">
      <Link legacyBehavior href="/login">
        <button className="logoutbut">
          <Image
            src="/logout.JPG"
            className="curvedimg"
            alt="An example image"
            width={180}
            height={50}
          />
        </button>
      </Link>
    </div>
  );
};

export default Navbar;
