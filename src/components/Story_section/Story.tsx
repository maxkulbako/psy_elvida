import Story_img from "../../assets/story_img_desk.webp";
import { SectionTitle } from "../Typography/Title";
import {
  StoryTitleWrapper,
  SectioWrapper,
  StoryBlock,
  StoryImgContainer,
  TextWrapper,
  TextTitle,
  Text,
} from "./Story.styles";
import { StyledPageNumber } from "../Typography/PageNumber.styles";
import { SectionContainer } from "../Typography/SectionContainer";

export const Story = () => {
  return (
    <SectionContainer>
      <StyledPageNumber color="dark" align="left">
        01
      </StyledPageNumber>
      <SectioWrapper>
        <StoryTitleWrapper>
          <SectionTitle color="dark" align="right" borderBottom="dark">
            Усі відповіді уже в тобі. <br /> Я тільки допоможу їх віднайти"
          </SectionTitle>
        </StoryTitleWrapper>
        <StoryBlock>
          <StoryImgContainer>
            <img src={Story_img} alt="About_img" />
          </StoryImgContainer>
          <TextWrapper>
            <TextTitle>Моя історія </TextTitle>
            <Text>
              Сім років тому я розпочала свою подорож до психології. Я знаю, як
              почувається людина, яка відчуває біль, вигорання і розгубленість.{" "}
            </Text>
            <Text>
              Знаю, як віднайти омріяний BALANCE. Сміливо починати все з нуля і
              реалізовуватися на повну.{" "}
            </Text>
            <Text>
              Моя місія - спільно з тобою знайти твою внутрішню силу, віру і
              бажання, які допоможуть жити на повну і саме головне - відчути
              справжню енергію життя.
            </Text>
          </TextWrapper>
        </StoryBlock>
      </SectioWrapper>
    </SectionContainer>
  );
};
