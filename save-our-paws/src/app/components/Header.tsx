import Image from 'next/image';
import { Button } from 'flowbite-react';
import logo from '../../../public/logo.png';

import Link from 'next/link';
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from 'flowbite-react';

interface Component {
  darktheme: React.ReactNode;
}

export default function Header({ darktheme }: Component) {
  return (
    <Navbar fluid rounded>
      <NavbarBrand as={Link} href="https://flowbite-react.com">
        <Image
          src={logo}
          className="mr-3 h-16 w-16 sm:h-16"
          alt="Save Our Paws Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Save Our Paws
        </span>
      </NavbarBrand>
      <div className="flex md:order-2 gap-4">
        <Button gradientDuoTone="cyanToBlue">Sign in</Button>
        <div>{darktheme}</div>
        <NavbarToggle />
      </div>

      <NavbarCollapse>
        <NavbarLink href="#" active>
          Home
        </NavbarLink>
        <NavbarLink href="#">Adopt me</NavbarLink>
        <NavbarLink href="#">Charity shop</NavbarLink>
        <NavbarLink href="#">Blog</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
