import Link from "next/link";
import MaxWidthWrapper from "./MaxWrapper";
// import { Icons } from "./Icons";
import Image from "next/image";
import NavItems from "./NavItems";

const Navbar = () => {
  return (
    <div className="bg-white sticky z-50 top-0 inset-x-0 h-16">
      <header className="bg-white relative">
        <MaxWidthWrapper>
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              {/* TODO: Mobile Nav */}
              <div className="ml-4 flex lg:ml-0">
                <Link href={"/"}>
                  <Image
                    src="/logo.png"
                    alt="Digital Africa"
                    width={120}
                    height={40}
                  />
                </Link>
              </div>
              <div className="hidden z-50 lg:ml-8 lg:block lg:self-stretch">
                <NavItems />
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
};
export default Navbar;
