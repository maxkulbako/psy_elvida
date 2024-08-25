import {
  BtnWrapper,
  CallBackWrapper,
  CloseIconWrapper,
  IconsBtnWrapper,
  ModalContainer,
  ModalWrapper,
} from "./Modal.styles";
import { SocialMediaSvg } from "../Icons/SocialMediaIcons";
import CloseIcon from "../../assets/close_icon.svg";
import { CallBackButton } from "../Button/СallBackBtn";
import { useModal } from "../../ModalContext";
import { useState } from "react";
import { linksData } from "../Icons/SocialMediaIcons";

export const Modal = () => {
  const { isModalOpen, closeModal } = useModal();
  const [selectedIconId, setSelectedIconId] = useState<string | null>(null);

  if (!isModalOpen) return null;

  const handleCloseModal = () => {
    setSelectedIconId(null);
    closeModal();
  };

  const handleIconClick = (id: string) => {
    setSelectedIconId(id);
  };

  const handleButtonClick = () => {
    if (selectedIconId) {
      const selectedIcon = linksData.find((icon) => icon.id === selectedIconId);
      if (selectedIcon) {
        window.open(selectedIcon.link, "_blank");
        handleCloseModal();
      }
    }
  };

  return (
    <ModalContainer>
      <ModalWrapper>
        <CloseIconWrapper onClick={handleCloseModal}>
          <img src={CloseIcon} alt="Close" />
        </CloseIconWrapper>
        <h3>Оберіть спосіб звʼязку зі мною</h3>
        <IconsBtnWrapper>
          {linksData.map((link) => (
            <BtnWrapper
              key={link.id}
              onClick={() => handleIconClick(link.id)}
              selected={selectedIconId === link.id}
            >
              <SocialMediaSvg id={link.id} />
              <p>{link.id}</p>
            </BtnWrapper>
          ))}
        </IconsBtnWrapper>
        <CallBackWrapper>
          <p>Відповідаю на повідомлення протягом 1 год</p>
          <CallBackButton
            text={"Звʼязатися"}
            inModal
            onClick={handleButtonClick}
          />
        </CallBackWrapper>
      </ModalWrapper>
    </ModalContainer>
  );
};
