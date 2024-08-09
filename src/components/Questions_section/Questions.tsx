import { SectionContainer } from "../Typography/SectionContainer";

import { useState } from "react";
import {
  PageNumber,
  Question,
  AnswerWrapper,
  Answer,
  FaqWrapper,
  FaqBlock,
} from "./Questions.styles";
import { SectionTitle } from "../Typography/Title";

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggle: () => void;
}

interface FaqItemData {
  question: string;
  answer: string;
}

const FaqItem = ({ question, answer, isOpen, toggle }: FaqItemProps) => {
  return (
    <div>
      <Question onClick={toggle}>
        <h3>{question}</h3>
      </Question>
      <AnswerWrapper isOpen={isOpen}>
        <Answer>
          <h3>{question}</h3>
          <p>{answer}</p>
        </Answer>
      </AnswerWrapper>
    </div>
  );
};

export const Questions = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqItems: FaqItemData[] = [
    {
      question: "Скільки консультацій необхідно?",
      answer:
        "Кількість необхідних зустрічей, залежить від декількох факторів: ваш основний запит/скарга, тобто те, з чим ви звернулися, наявність додаткових проблем, виявлених у ході обстеження/дослідження, кінцевий список цілей, сформульований спільно з вами. Після систематизації списку цілей і бажань ми можемо узгодити план консультування або терапії та прогнозування її тривалості. Також до уваги варто взяти життєвий контекст, який може вносити корективи в довготривалість терапії.",
    },
    {
      question: "Як часто проводяться консультації?",
      answer:
        "Частота консультацій залежить від вашого графіку і потреби в терапії. Зазвичай вони проводяться раз на тиждень або раз на два тижні.",
    },
    {
      question: "Яка вартість консультацій?",
      answer:
        "Вартість консультацій може варіюватися в залежності від тривалості сесії та інших факторів. Будь ласка, зверніться за додатковою інформацією.",
    },
    {
      question: "Скільки консультацій необхідно?",
      answer:
        "Кількість необхідних зустрічей, залежить від декількох факторів: ваш основний запит/скарга, тобто те, з чим ви звернулися, наявність додаткових проблем, виявлених у ході обстеження/дослідження, кінцевий список цілей, сформульований спільно з вами. Після систематизації списку цілей і бажань ми можемо узгодити план консультування або терапії та прогнозування її тривалості. Також до уваги варто взяти життєвий контекст, який може вносити корективи в довготривалість терапії.",
    },
    {
      question: "Як часто проводяться консультації?",
      answer:
        "Частота консультацій залежить від вашого графіку і потреби в терапії. Зазвичай вони проводяться раз на тиждень або раз на два тижні.",
    },
    {
      question: "Яка вартість консультацій?",
      answer:
        "Вартість консультацій може варіюватися в залежності від тривалості сесії та інших факторів. Будь ласка, зверніться за додатковою інформацією.",
    },
  ];

  const toggleAnswer = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <SectionContainer background="green">
      <PageNumber align="left">07</PageNumber>
      <FaqWrapper>
        <SectionTitle borderBottom="light">
          Відповіді на часті запитання
        </SectionTitle>
        <FaqBlock>
          {faqItems.map((item, index) => (
            <FaqItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={activeIndex === index}
              toggle={() => toggleAnswer(index)}
            />
          ))}
        </FaqBlock>
      </FaqWrapper>
    </SectionContainer>
  );
};
