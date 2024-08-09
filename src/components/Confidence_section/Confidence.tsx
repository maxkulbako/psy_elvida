import SmallLogo from "../../assets/small_logo.svg";
import {
  ConfidenceBlock,
  ConfidenceContainer,
  Text,
  ConfidenceTitleWrapper,
} from "./Confidence.styles";
import { StyledPageNumber } from "../Typography/PageNumber.styles";
import { SectionTitle } from "../Typography/Title";

export const Confidence = () => {
  return (
    <ConfidenceContainer>
      <StyledPageNumber align="left" color="light">
        06
      </StyledPageNumber>
      <ConfidenceBlock>
        <ConfidenceTitleWrapper>
          <SectionTitle borderBottom="dark">100% КОНФІДЕНЦІЙНОСТІ</SectionTitle>
        </ConfidenceTitleWrapper>
        <Text>
          Я дію відповідно до етичних стандартів УАПП <br></br>
          <br></br>
        </Text>
        <Text>
          Завжди враховую інтереси своїх клієнтів, усвідомлюю <br></br>
          межі своїх знань, <br></br>
          досвіду та навичок.
        </Text>
        <img src={SmallLogo} alt="Small_logo" />
      </ConfidenceBlock>
    </ConfidenceContainer>
  );
};
