import { StyledPageNumber } from "../Typography/PageNumber.styles";
import Programs_img from "../../assets/programs_img_desk.webp";
import { SectionTitle } from "../Typography/Title";
import {
  ProgramCardWrapper,
  ProgramsBlock,
  ProgramsImgContainer,
  ProgramsTitleWrapper,
  SectioWrapper,
  TextBlock,
  ProgramsContainer,
} from "./Programs.styles";

export const Programs = () => {
  const programsData: ProgramCardProps[] = [
    {
      title: "Корпоративні лекції",
      text: "Звертайтесь до мене щодо проведення лекцій чи тренінгів, щоб збільшити ефективність своїх співробітників для збільшення доходу.",
    },
    {
      title: "Некомерційне партнерство",
      text: "Я активно підтримую ініціативи, які дотичні до психоосвіти.",
    },
    {
      title: "Корпоративні лекції",
      text: "Звертайтесь до мене щодо проведення лекцій чи тренінгів, щоб збільшити ефективність своїх співробітників для збільшення доходу.",
    },
    {
      title: "Некомерційне партнерство",
      text: "Я активно підтримую ініціативи, які дотичні до психоосвіти.",
    },
  ];

  return (
    <ProgramsContainer>
      <StyledPageNumber color="dark" align="right">
        06
      </StyledPageNumber>
      <SectioWrapper>
        <ProgramsTitleWrapper>
          <SectionTitle color="dark" borderBottom="dark" align="left">
            Мої програми. <br></br> Персональні та групові
          </SectionTitle>
        </ProgramsTitleWrapper>
        <ProgramsBlock>
          <ProgramsImgContainer>
            <img src={Programs_img} alt="Programs_img" />
          </ProgramsImgContainer>
          <TextBlock>
            {programsData.map((program, index) => (
              <ProgramCard
                key={index}
                title={program.title}
                text={program.text}
              />
            ))}
          </TextBlock>
        </ProgramsBlock>
      </SectioWrapper>
    </ProgramsContainer>
  );
};

interface ProgramCardProps {
  title: string;
  text: string;
}

const ProgramCard = ({ title, text }: ProgramCardProps) => {
  return (
    <ProgramCardWrapper>
      <h3>{title}</h3>
      <p>{text}</p>
    </ProgramCardWrapper>
  );
};
