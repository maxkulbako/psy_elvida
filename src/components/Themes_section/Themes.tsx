import Themes_img from "../../assets/themes_img.jpeg";
import Questions_img from "../../assets/questions_img.jpeg";
import { SectionTitle } from "../Typography/Title";
import { StyledPageNumber } from "../Typography/PageNumber.styles";
import {
  ThemesContainer,
  ThemesWrapper,
  ThemesImgContainer,
  ThemesTitleWrapper,
  ThemaWrapper,
  ThemesBlockWrapper,
  ThemesBlock,
  QuestionsWrapper,
  QuestionsTitleWrapper,
  QuestionWrapper,
} from "./Themes.styles";

export const Themes = () => {
  const themesData: string[] = [
    "ВІДНОСИНИ В СІМʼЇ, РОДИНІ",
    "ВИГОРАННЯ",
    "ТОСУНКИ З ПАРТНЕРОМ",
    "САМООЦІНКА",
    "ПОШУК СЕБЕ",
    "САМОРЕАЛІЗАЦІЯ",
    "БАЛАНС В ЖИТТІ",
    "ХТО Я?",
  ];

  const questionsData: string[] = [
    "Я заплуталась з правильним рішенням",
    "Мене не розуміють і не чують рідні",
    "Не розумію куди рухатись далі",
    "Не знаю, що зі мною, але я якась не така",
    "Втомилась від постійної гонки",
    "Відчуття самозванця",
    "Відчуваю в собі сили зробити ривок, але боюсь",
    "Не можу казати «ні»",
    "Загубила себе. Не знаю з чого почати",
  ];

  return (
    <ThemesContainer>
      <StyledPageNumber>02</StyledPageNumber>
      <ThemesWrapper>
        <ThemesBlockWrapper>
          <ThemesTitleWrapper>
            <SectionTitle align="left" borderBottom="dark" color="light">
              Теми, на які Ти знайдеш відповіді
            </SectionTitle>
          </ThemesTitleWrapper>
          <ThemesBlock>
            {themesData.map((item, index) => (
              <ThemaWrapper key={index}>
                <p>{item}</p>
              </ThemaWrapper>
            ))}
          </ThemesBlock>
        </ThemesBlockWrapper>
        <ThemesImgContainer>
          <img src={Themes_img} alt="Themes_img" />
        </ThemesImgContainer>
      </ThemesWrapper>
      <StyledPageNumber align="left">03</StyledPageNumber>
      <QuestionsWrapper>
        <ThemesBlockWrapper>
          <QuestionsTitleWrapper>
            <SectionTitle align="right" borderBottom="dark">
              Запити, з якими звертаються клієнти
            </SectionTitle>
          </QuestionsTitleWrapper>
          <ThemesBlock>
            {questionsData.map((item, index) => (
              <QuestionWrapper key={index}>
                <p>{item}</p>
              </QuestionWrapper>
            ))}
          </ThemesBlock>
        </ThemesBlockWrapper>
        <ThemesImgContainer>
          <img
            src={Questions_img}
            alt="Themes_img"
            style={{ transform: "scaleX(-1)" }}
          />
        </ThemesImgContainer>
      </QuestionsWrapper>
    </ThemesContainer>
  );
};
