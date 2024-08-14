import { CallBackButton } from "../Button/СallBackBtn";
import { SectionContainer } from "../Typography/SectionContainer";
import { StyledPageNumber } from "../Typography/PageNumber.styles";
import { StyledTitle } from "../Typography/Title.styles";
import {
  PricesTitleWrapper,
  PricesWrapper,
  PricesBlock,
  PriceCard,
  PricesTitle,
  PriceText,
} from "./Prices.styles";

export const Prices = () => {
  return (
    <SectionContainer>
      <StyledPageNumber align="right" color="dark">
        04
      </StyledPageNumber>
      <PricesWrapper>
        <PricesTitleWrapper>
          <StyledTitle color="dark" borderBottom="dark">
            "Тарифи"
          </StyledTitle>
        </PricesTitleWrapper>
        <PricesBlock>
          <PriceCard>
            <PricesTitle>500 грн</PricesTitle>
            <PriceText>
              <p>
                1 <br />
                <span>консультація</span>
              </p>
            </PriceText>
          </PriceCard>
          <PriceCard>
            <PricesTitle>2500 грн</PricesTitle>
            <PriceText>
              <p>
                5+1 <br />
                <span>1 консультація в</span> <br />
                ПОДАРУНОК <br />
              </p>{" "}
              <span
                style={{
                  fontWeight: "400",
                  fontSize: "14px",
                  marginTop: "20px",
                }}
              >
                *рекомендую
              </span>
            </PriceText>
          </PriceCard>
          <PriceCard>
            <PricesTitle>5000 грн</PricesTitle>
            <PriceText>
              <p>
                10+3 <br />
                <span>3 консультації в</span> <br />
                ПОДАРУНОК
              </p>
            </PriceText>
          </PriceCard>
        </PricesBlock>
        <CallBackButton text="Звʼязатися" />
      </PricesWrapper>
    </SectionContainer>
  );
};
