import styles from "./Questions.module.scss";
import ArrowDownIcon from "../../assets/arrow_down.svg";
import ArrowUpIcon from "../../assets/arrow_up.svg";
import { useState } from "react";

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

const FaqItem: React.FC<FaqItemProps> = ({
  question,
  answer,
  isOpen,
  toggle,
}) => {
  return (
    <div className={styles.faq_wrapper}>
      <div className={styles.question} onClick={toggle}>
        <h3>{question}</h3>
        <img src={ArrowDownIcon} alt="ArrowIcon" />
      </div>
      <div
        className={`${styles.answer_wrapper} ${isOpen ? styles.active : ""}`}
      >
        <div className={styles.answer}>
          <div className={styles.answer_title}>
            <h3>{question}</h3>
            <img src={ArrowUpIcon} alt="ArrowIcon" />
          </div>
          <p>{answer}</p>
        </div>
      </div>
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
    <div className={styles.questions_container}>
      <p className={styles.page_number}>07</p>
      <div className={styles.block_wrapper}>
        <p className={styles.title}>Відповіді на часті запитання</p>
        {faqItems.map((item, index) => (
          <FaqItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={activeIndex === index}
            toggle={() => toggleAnswer(index)}
          />
        ))}
      </div>
    </div>
  );
};
