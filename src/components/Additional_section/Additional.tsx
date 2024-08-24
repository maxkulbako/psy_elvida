import { CallBackButton } from "../Button/СallBackBtn";
import { SectionContainer } from "../Typography/SectionContainer";
import { SectionTitle } from "../Typography/Title";
import {
  AdditionalImgContainer,
  CallBackText,
  CallBackWrapper,
  SectioWrapper,
} from "./Additional.styles";
import AdditionalImg from "../../assets/additional_img_desk.webp";

export const Additional = () => {
  return (
    <SectionContainer>
      <SectioWrapper>
        <CallBackWrapper>
          <SectionTitle color="dark">Все ще залишились питання?</SectionTitle>
          <CallBackText>Напиши їх мені в Telegram</CallBackText>
          <CallBackButton text="Звʼязатися" />
        </CallBackWrapper>
        <AdditionalImgContainer>
          <img src={AdditionalImg} alt="AdditionalImg" />
        </AdditionalImgContainer>
      </SectioWrapper>
    </SectionContainer>
  );
};
