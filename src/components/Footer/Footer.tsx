import {
  ContactsWrapper,
  FooterContainer,
  FooterLogoContainer,
  FooterSmallLogoContainer,
  FooterWrapper,
  SocialMediaWrapper,
} from "./Footer.styles";
import Logo from "../../assets/logo.svg";
import SmallLogo from "../../assets/small_logo.svg";
import { SocialMediaSvg } from "../Icons/SocialMediaIcons";
import { linksData } from "../Icons/SocialMediaIcons";

export const Footer = () => {
  return (
    <footer>
      <FooterContainer background="green">
        <FooterWrapper>
          <FooterSmallLogoContainer>
            <img src={SmallLogo} alt="SmallLogo" />
          </FooterSmallLogoContainer>
          <ContactsWrapper>
            <p>+38 050 299 90 99</p>
            <p>info@psy-elvida.com</p>
          </ContactsWrapper>
          <FooterLogoContainer>
            <img src={Logo} />
          </FooterLogoContainer>
          <SocialMediaWrapper>
            {linksData.map((link) => (
              <a key={link.id} href={link.link} target="_blank">
                <SocialMediaSvg id={link.id} />
              </a>
            ))}
          </SocialMediaWrapper>
        </FooterWrapper>
        <p>Elvida Kulbako &copy; 2024</p>
      </FooterContainer>
    </footer>
  );
};
