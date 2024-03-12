import {
  Footer,
  FooterCopyright,
  FooterLink,
  FooterLinkGroup,
} from 'flowbite-react';

export default function FooterComponent() {
  return (
    <Footer container>
      <FooterCopyright href="#" by="Save Our Paws™" year={new Date().getFullYear()} />
      <FooterLinkGroup>
        <FooterLink href="#">Contact</FooterLink>
      </FooterLinkGroup>
    </Footer>
  );
}
