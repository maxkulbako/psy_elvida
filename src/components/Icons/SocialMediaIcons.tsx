export interface SocialMediaSvgProps {
  id: "telegram" | "instagram" | "facebook" | "mobile";
}

export const SocialMediaSvg = ({ id }: SocialMediaSvgProps) => {
  switch (id) {
    case "telegram":
      return (
        <svg
          width="57"
          height="56"
          viewBox="0 0 57 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.559896"
            y="0.333333"
            width="55.3333"
            height="55.3333"
            rx="27.6667"
            stroke="currentColor"
            stroke-width="0.666667"
          />
          <path
            d="M41.348 17.4687C41.2628 17.4025 41.1591 17.3584 41.0482 17.3414C40.9372 17.3244 40.8231 17.335 40.7184 17.3721L15.6997 26.183C15.4446 26.2721 15.2287 26.4334 15.0843 26.6426C14.94 26.8517 14.8752 27.0974 14.8996 27.3427C14.9239 27.5879 15.0362 27.8193 15.2195 28.0021C15.4028 28.1849 15.6471 28.3091 15.9157 28.3561L22.7969 29.5714V36.4416C22.7969 36.7074 22.8851 36.9671 23.0503 37.1874C23.2155 37.4078 23.4501 37.5786 23.724 37.6781C23.9003 37.7417 24.0884 37.7745 24.2783 37.7747C24.4771 37.7743 24.6738 37.7379 24.8566 37.6677C25.0394 37.5974 25.2046 37.4948 25.3425 37.3659L28.7991 34.1441L34.1075 38.3335C34.3767 38.5471 34.7228 38.6656 35.0816 38.6668C35.2383 38.6663 35.394 38.6442 35.5433 38.6013C35.7877 38.5317 36.0075 38.4056 36.1808 38.2356C36.3541 38.0656 36.4748 37.8576 36.5309 37.6325L41.5455 18.0131C41.5706 17.9148 41.5655 17.8121 41.5307 17.7162C41.4959 17.6203 41.4327 17.5348 41.348 17.4687ZM15.8836 27.2629C15.8764 27.2091 15.8898 27.1548 15.9217 27.1089C15.9536 27.063 16.002 27.0283 16.0589 27.0107L37.6197 19.4173L23.1759 28.7327L16.107 27.484C16.0471 27.4761 15.9921 27.4497 15.9514 27.4094C15.9106 27.3691 15.8867 27.3173 15.8836 27.2629ZM24.6326 36.7482C24.5644 36.8115 24.4767 36.8551 24.3808 36.8734C24.2849 36.8917 24.1852 36.8839 24.0942 36.851C24.0033 36.8182 23.9253 36.7617 23.8701 36.6887C23.8149 36.6158 23.7852 36.5298 23.7845 36.4416V30.1869L28.0535 33.5531L24.6326 36.7482ZM35.568 37.4303C35.5489 37.5058 35.5082 37.5754 35.45 37.6324C35.3918 37.6893 35.3181 37.7316 35.2362 37.7551C35.1543 37.7786 35.067 37.7824 34.9829 37.7661C34.8988 37.7499 34.8209 37.7142 34.7569 37.6625L24.0845 29.2404L40.3431 18.7552L35.568 37.4303Z"
            fill="currentColor"
          />
        </svg>
      );

    case "instagram":
      return (
        <svg
          width="57"
          height="56"
          viewBox="0 0 57 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.559896"
            y="0.333333"
            width="55.3333"
            height="55.3333"
            rx="27.6667"
            stroke="currentColor"
            stroke-width="0.666667"
          />
          <path
            d="M22.7689 16.5429H33.7004C37.0096 16.5429 39.6915 19.2249 39.6915 22.534V33.4651C39.6915 36.7742 37.009 39.4567 33.6999 39.4567H22.7694C19.4602 39.4567 16.7778 36.7747 16.7778 33.4656V22.534C16.7778 19.2254 19.4598 16.5429 22.7689 16.5429Z"
            stroke="currentColor"
            stroke-width="0.789934"
          />
          <path
            d="M28.2334 33.7212C31.3934 33.7212 33.9551 31.1595 33.9551 27.9995C33.9551 24.8395 31.3934 22.2778 28.2334 22.2778C25.0734 22.2778 22.5117 24.8395 22.5117 27.9995C22.5117 31.1595 25.0734 33.7212 28.2334 33.7212Z"
            stroke="currentColor"
            stroke-width="0.789934"
            stroke-miterlimit="10"
          />
          <path
            d="M36.0139 21.0521C36.0139 21.511 35.6419 21.8831 35.183 21.8831C34.724 21.8831 34.352 21.511 34.352 21.0521C34.352 20.5932 34.724 20.2211 35.183 20.2211C35.6419 20.2211 36.0139 20.5932 36.0139 21.0521Z"
            stroke="currentColor"
            stroke-width="0.789934"
          />
        </svg>
      );

    case "facebook":
      return (
        <svg
          width="57"
          height="56"
          viewBox="0 0 57 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.559896"
            y="0.333333"
            width="55.3333"
            height="55.3333"
            rx="27.6667"
            stroke="currentColor"
            stroke-width="0.666667"
          />
          <mask id="path-2-inside-1_384_872" fill="currentColo">
            <path d="M28.2318 14.666C25.5947 14.666 23.0168 15.448 20.8242 16.9131C18.6315 18.3782 16.9226 20.4606 15.9134 22.8969C14.9042 25.3332 14.6402 28.0141 15.1546 30.6005C15.6691 33.187 16.939 35.5627 18.8037 37.4274C20.6684 39.2921 23.0442 40.562 25.6306 41.0765C28.217 41.591 30.8979 41.3269 33.3342 40.3177C35.7706 39.3086 37.8529 37.5996 39.318 35.4069C40.7831 33.2143 41.5651 30.6364 41.5651 27.9993C41.5612 24.4643 40.1552 21.0752 37.6556 18.5755C35.1559 16.0759 31.7668 14.6699 28.2318 14.666ZM28.7651 40.254V30.666H32.4984C32.6399 30.666 32.7755 30.6098 32.8756 30.5098C32.9756 30.4098 33.0318 30.2741 33.0318 30.1327C33.0318 29.9912 32.9756 29.8556 32.8756 29.7556C32.7755 29.6555 32.6399 29.5993 32.4984 29.5993H28.7651V25.866C28.7651 25.1588 29.0461 24.4805 29.5462 23.9804C30.0463 23.4803 30.7245 23.1993 31.4318 23.1993H33.5651C33.7066 23.1993 33.8422 23.1432 33.9422 23.0431C34.0422 22.9431 34.0984 22.8075 34.0984 22.666C34.0984 22.5246 34.0422 22.3889 33.9422 22.2889C33.8422 22.1889 33.7066 22.1327 33.5651 22.1327H31.4318C30.4416 22.1327 29.492 22.526 28.7919 23.2261C28.0918 23.9263 27.6984 24.8759 27.6984 25.866V29.5993H23.9651C23.8237 29.5993 23.688 29.6555 23.588 29.7556C23.488 29.8556 23.4318 29.9912 23.4318 30.1327C23.4318 30.2741 23.488 30.4098 23.588 30.5098C23.688 30.6098 23.8237 30.666 23.9651 30.666H27.6984V40.254C24.4943 40.1146 21.4723 38.7258 19.2797 36.3853C17.087 34.0448 15.8983 30.9386 15.968 27.7322C16.0377 24.5258 17.3604 21.4743 19.6528 19.2313C21.9451 16.9883 25.0246 15.7323 28.2318 15.7323C31.4389 15.7323 34.5185 16.9883 36.8108 19.2313C39.1031 21.4743 40.4258 24.5258 40.4955 27.7322C40.5653 30.9386 39.3765 34.0448 37.1839 36.3853C34.9913 38.7258 31.9692 40.1146 28.7651 40.254Z" />
          </mask>
          <path
            d="M28.2318 14.666C25.5947 14.666 23.0168 15.448 20.8242 16.9131C18.6315 18.3782 16.9226 20.4606 15.9134 22.8969C14.9042 25.3332 14.6402 28.0141 15.1546 30.6005C15.6691 33.187 16.939 35.5627 18.8037 37.4274C20.6684 39.2921 23.0442 40.562 25.6306 41.0765C28.217 41.591 30.8979 41.3269 33.3342 40.3177C35.7706 39.3086 37.8529 37.5996 39.318 35.4069C40.7831 33.2143 41.5651 30.6364 41.5651 27.9993C41.5612 24.4643 40.1552 21.0752 37.6556 18.5755C35.1559 16.0759 31.7668 14.6699 28.2318 14.666ZM28.7651 40.254V30.666H32.4984C32.6399 30.666 32.7755 30.6098 32.8756 30.5098C32.9756 30.4098 33.0318 30.2741 33.0318 30.1327C33.0318 29.9912 32.9756 29.8556 32.8756 29.7556C32.7755 29.6555 32.6399 29.5993 32.4984 29.5993H28.7651V25.866C28.7651 25.1588 29.0461 24.4805 29.5462 23.9804C30.0463 23.4803 30.7245 23.1993 31.4318 23.1993H33.5651C33.7066 23.1993 33.8422 23.1432 33.9422 23.0431C34.0422 22.9431 34.0984 22.8075 34.0984 22.666C34.0984 22.5246 34.0422 22.3889 33.9422 22.2889C33.8422 22.1889 33.7066 22.1327 33.5651 22.1327H31.4318C30.4416 22.1327 29.492 22.526 28.7919 23.2261C28.0918 23.9263 27.6984 24.8759 27.6984 25.866V29.5993H23.9651C23.8237 29.5993 23.688 29.6555 23.588 29.7556C23.488 29.8556 23.4318 29.9912 23.4318 30.1327C23.4318 30.2741 23.488 30.4098 23.588 30.5098C23.688 30.6098 23.8237 30.666 23.9651 30.666H27.6984V40.254C24.4943 40.1146 21.4723 38.7258 19.2797 36.3853C17.087 34.0448 15.8983 30.9386 15.968 27.7322C16.0377 24.5258 17.3604 21.4743 19.6528 19.2313C21.9451 16.9883 25.0246 15.7323 28.2318 15.7323C31.4389 15.7323 34.5185 16.9883 36.8108 19.2313C39.1031 21.4743 40.4258 24.5258 40.4955 27.7322C40.5653 30.9386 39.3765 34.0448 37.1839 36.3853C34.9913 38.7258 31.9692 40.1146 28.7651 40.254Z"
            fill="currentColor"
          />
          <path
            d="M28.2318 14.666L28.2343 12.3905H28.2318V14.666ZM41.5651 27.9993H43.8407L43.8407 27.9968L41.5651 27.9993ZM28.7651 40.254H26.4896V42.6307L28.864 42.5274L28.7651 40.254ZM28.7651 30.666V28.3905H26.4896V30.666H28.7651ZM28.7651 29.5993H26.4896V31.8749H28.7651V29.5993ZM31.4318 23.1993V25.4749V23.1993ZM31.4318 22.1327V19.8571V22.1327ZM27.6984 29.5993V31.8749H29.974V29.5993H27.6984ZM27.6984 30.666H29.974V28.3905H27.6984V30.666ZM27.6984 40.254L27.5995 42.5274L29.974 42.6307V40.254H27.6984ZM28.2318 12.3905C25.1446 12.3905 22.1268 13.3059 19.5599 15.021L22.0884 18.8051C23.9068 17.5901 26.0448 16.9416 28.2318 16.9416V12.3905ZM19.5599 15.021C16.9931 16.7362 14.9924 19.1739 13.811 22.0261L18.0157 23.7677C18.8527 21.7472 20.27 20.0202 22.0884 18.8051L19.5599 15.021ZM13.811 22.0261C12.6296 24.8782 12.3205 28.0167 12.9228 31.0445L17.3865 30.1566C16.9598 28.0116 17.1788 25.7883 18.0157 23.7677L13.811 22.0261ZM12.9228 31.0445C13.5251 34.0723 15.0117 36.8536 17.1946 39.0365L20.4127 35.8184C18.8663 34.2719 17.8131 32.3016 17.3865 30.1566L12.9228 31.0445ZM17.1946 39.0365C19.3776 41.2194 22.1588 42.706 25.1866 43.3083L26.0745 38.8447C23.9295 38.418 21.9592 37.3648 20.4127 35.8184L17.1946 39.0365ZM25.1866 43.3083C28.2145 43.9106 31.3529 43.6015 34.205 42.4201L32.4634 38.2154C30.4429 39.0523 28.2195 39.2713 26.0745 38.8447L25.1866 43.3083ZM34.205 42.4201C37.0572 41.2387 39.495 39.238 41.2101 36.6712L37.426 34.1427C36.2109 35.9612 34.4839 37.3785 32.4634 38.2154L34.205 42.4201ZM41.2101 36.6712C42.9252 34.1043 43.8407 31.0865 43.8407 27.9993H39.2895C39.2895 30.1864 38.641 32.3243 37.426 34.1427L41.2101 36.6712ZM43.8407 27.9968C43.8361 23.8592 42.1904 19.8923 39.2646 16.9665L36.0465 20.1846C38.12 22.2581 39.2863 25.0695 39.2896 28.0018L43.8407 27.9968ZM39.2646 16.9665C36.3389 14.0407 32.372 12.395 28.2343 12.3905L28.2293 16.9416C31.1617 16.9448 33.973 18.1111 36.0465 20.1846L39.2646 16.9665ZM31.0407 40.254V30.666H26.4896V40.254H31.0407ZM28.7651 32.9416H32.4984V28.3905H28.7651V32.9416ZM32.4984 32.9416C33.2434 32.9416 33.9579 32.6456 34.4846 32.1189L31.2665 28.9007C31.5932 28.574 32.0364 28.3905 32.4984 28.3905V32.9416ZM34.4846 32.1189C35.0114 31.5921 35.3073 30.8776 35.3073 30.1327H30.7562C30.7562 29.6706 30.9398 29.2275 31.2665 28.9007L34.4846 32.1189ZM35.3073 30.1327C35.3073 29.3877 35.0114 28.6733 34.4846 28.1465L31.2665 31.3646C30.9398 31.0379 30.7562 30.5947 30.7562 30.1327H35.3073ZM34.4846 28.1465C33.9579 27.6197 33.2434 27.3238 32.4984 27.3238V31.8749C32.0364 31.8749 31.5932 31.6913 31.2665 31.3646L34.4846 28.1465ZM32.4984 27.3238H28.7651V31.8749H32.4984V27.3238ZM31.0407 29.5993V25.866H26.4896V29.5993H31.0407ZM31.0407 25.866C31.0407 25.7623 31.0819 25.6628 31.1552 25.5895L27.9371 22.3713C27.0102 23.2982 26.4896 24.5553 26.4896 25.866H31.0407ZM31.1552 25.5895C31.2286 25.5161 31.328 25.4749 31.4318 25.4749V20.9238C30.121 20.9238 28.8639 21.4445 27.9371 22.3713L31.1552 25.5895ZM31.4318 25.4749H33.5651V20.9238H31.4318V25.4749ZM33.5651 25.4749C34.3101 25.4749 35.0245 25.179 35.5513 24.6522L32.3332 21.4341C32.6599 21.1073 33.103 20.9238 33.5651 20.9238V25.4749ZM35.5513 24.6522C36.0781 24.1254 36.374 23.411 36.374 22.666H31.8229C31.8229 22.204 32.0064 21.7608 32.3332 21.4341L35.5513 24.6522ZM36.374 22.666C36.374 21.9211 36.0781 21.2066 35.5513 20.6798L32.3332 23.898C32.0064 23.5712 31.8229 23.1281 31.8229 22.666H36.374ZM35.5513 20.6798C35.0245 20.1531 34.3101 19.8571 33.5651 19.8571V24.4082C33.103 24.4082 32.6599 24.2247 32.3332 23.898L35.5513 20.6798ZM33.5651 19.8571H31.4318V24.4082H33.5651V19.8571ZM31.4318 19.8571C29.8381 19.8571 28.3097 20.4902 27.1828 21.6171L30.401 24.8352C30.6744 24.5618 31.0451 24.4082 31.4318 24.4082V19.8571ZM27.1828 21.6171C26.056 22.744 25.4229 24.2724 25.4229 25.866H29.974C29.974 25.4794 30.1276 25.1086 30.401 24.8352L27.1828 21.6171ZM25.4229 25.866V29.5993H29.974V25.866H25.4229ZM27.6984 27.3238H23.9651V31.8749H27.6984V27.3238ZM23.9651 27.3238C23.2202 27.3238 22.5057 27.6197 21.9789 28.1465L25.197 31.3646C24.8703 31.6913 24.4272 31.8749 23.9651 31.8749V27.3238ZM21.9789 28.1465C21.4522 28.6733 21.1562 29.3877 21.1562 30.1327H25.7073C25.7073 30.5947 25.5238 31.0379 25.197 31.3646L21.9789 28.1465ZM21.1562 30.1327C21.1562 30.8776 21.4522 31.5921 21.9789 32.1189L25.197 28.9007C25.5238 29.2275 25.7073 29.6706 25.7073 30.1327H21.1562ZM21.9789 32.1189C22.5057 32.6456 23.2202 32.9416 23.9651 32.9416V28.3905C24.4272 28.3905 24.8703 28.574 25.197 28.9007L21.9789 32.1189ZM23.9651 32.9416H27.6984V28.3905H23.9651V32.9416ZM25.4229 30.666V40.254H29.974V30.666H25.4229ZM27.7974 37.9806C25.1877 37.867 22.7262 36.7359 20.9403 34.8296L17.619 37.941C20.2183 40.7157 23.801 42.3621 27.5995 42.5274L27.7974 37.9806ZM20.9403 34.8296C19.1545 32.9232 18.1862 30.3933 18.243 27.7817L13.693 27.6827C13.6103 31.4839 15.0196 35.1663 17.619 37.941L20.9403 34.8296ZM18.243 27.7817C18.2998 25.1701 19.3772 22.6847 21.2442 20.8578L18.0613 17.6048C15.3437 20.2639 13.7757 23.8816 13.693 27.6827L18.243 27.7817ZM21.2442 20.8578C23.1113 19.0309 25.6196 18.0078 28.2318 18.0078V13.4567C24.4297 13.4567 20.7788 14.9458 18.0613 17.6048L21.2442 20.8578ZM28.2318 18.0078C30.844 18.0078 33.3523 19.0309 35.2193 20.8578L38.4023 17.6048C35.6847 14.9458 32.0338 13.4567 28.2318 13.4567V18.0078ZM35.2193 20.8578C37.0864 22.6847 38.1637 25.1701 38.2205 27.7817L42.7706 27.6827C42.6879 23.8816 41.1198 20.2639 38.4023 17.6048L35.2193 20.8578ZM38.2205 27.7817C38.2773 30.3933 37.3091 32.9232 35.5232 34.8296L38.8446 37.941C41.4439 35.1663 42.8532 31.4839 42.7706 27.6827L38.2205 27.7817ZM35.5232 34.8296C33.7373 36.7359 31.2759 37.867 28.6662 37.9806L28.864 42.5274C32.6625 42.3621 36.2452 40.7157 38.8446 37.941L35.5232 34.8296Z"
            fill="currentColor"
            mask="url(#path-2-inside-1_384_872)"
          />
        </svg>
      );

    case "mobile":
      return (
        <svg
          width="57"
          height="56"
          viewBox="0 0 57 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.559896"
            y="0.333333"
            width="55.3333"
            height="55.3333"
            rx="27.6667"
            stroke="currentColor"
            stroke-width="0.666667"
          />
          <path
            d="M17.9808 16.0003C17.8097 15.9966 17.6396 16.0272 17.4804 16.0902C17.3213 16.1531 17.1764 16.2473 17.0541 16.367C16.9318 16.4867 16.8347 16.6297 16.7684 16.7874C16.7021 16.9452 16.6679 17.1146 16.668 17.2857V37.8462C16.6679 38.0173 16.7021 38.1868 16.7684 38.3445C16.8347 38.5023 16.9318 38.6452 17.0541 38.765C17.1764 38.8847 17.3213 38.9788 17.4804 39.0418C17.6396 39.1047 17.8097 39.1353 17.9808 39.1317H19.2662V42.6667L26.3362 39.1317H38.4934C38.8343 39.1317 39.1613 38.9962 39.4023 38.7552C39.6434 38.5141 39.7788 38.1871 39.7788 37.8462V17.2857C39.7788 16.9448 39.6434 16.6179 39.4023 16.3768C39.1613 16.1357 38.8343 16.0003 38.4934 16.0003H17.9808ZM21.1944 20.4994H25.0234C25.1907 20.5092 25.3486 20.58 25.4671 20.6985C25.5855 20.817 25.6564 20.9748 25.6662 21.1421C25.6446 22.0187 25.7908 22.8913 26.0969 23.713C26.2315 23.9877 26.262 24.3018 26.1828 24.5972C26.1036 24.8926 25.9201 25.1494 25.6662 25.3198L24.2987 26.6874C24.8962 27.8524 25.6765 28.9143 26.6097 29.8326C27.537 30.7604 28.5998 31.542 29.7618 32.1505L31.1293 30.783C31.2998 30.5291 31.5566 30.3456 31.852 30.2664C32.1474 30.1872 32.4615 30.2177 32.7362 30.3523C33.5579 30.6584 34.4305 30.8046 35.3071 30.783C35.4744 30.7928 35.6322 30.8637 35.7507 30.9821C35.8692 31.1006 35.94 31.2585 35.9498 31.4258V35.2821C35.94 35.4494 35.8692 35.6073 35.7507 35.7258C35.6322 35.8442 35.4744 35.9151 35.3071 35.9249C31.4333 35.7712 27.7598 34.1625 25.0198 31.4199C22.2797 28.6773 20.6744 25.0024 20.5243 21.1284C20.5373 20.9636 20.6096 20.809 20.7277 20.6934C20.8459 20.5777 21.002 20.5088 21.1671 20.4994H21.1944Z"
            stroke="currentColor"
            stroke-width="0.683753"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M32.3348 25.6881V25.6995C32.3331 25.7627 32.3072 25.8228 32.2624 25.8675C32.2177 25.9121 32.1575 25.9379 32.0943 25.9394C32.0311 25.941 31.9697 25.9182 31.9228 25.8759C31.8759 25.8335 31.8471 25.7747 31.8422 25.7117C31.8587 25.5422 31.8383 25.3704 31.7823 25.2097C31.7263 25.0489 31.6361 24.9022 31.5179 24.7797C31.3997 24.6571 31.2564 24.5617 31.0977 24.5C30.9396 24.4385 30.7701 24.4119 30.6008 24.422C30.6013 24.4221 30.6017 24.4221 30.6022 24.4222H30.599C30.5996 24.4221 30.6002 24.4221 30.6008 24.422C30.5383 24.4168 30.4801 24.388 30.438 24.3414C30.3957 24.2944 30.373 24.2329 30.3746 24.1697C30.3763 24.1065 30.4022 24.0463 30.447 24.0016C30.4917 23.9569 30.552 23.9311 30.6152 23.9296H30.6282L30.6842 23.9287C30.9107 23.9287 31.1349 23.9752 31.3427 24.0654C31.5506 24.1555 31.7377 24.2875 31.8924 24.453C32.0471 24.6185 32.1661 24.8141 32.2421 25.0275C32.3181 25.241 32.3494 25.4678 32.334 25.6938L32.3348 25.6881Z"
            fill="currentColor"
          />
          <path
            d="M30.2232 23.1018C32.1368 23.243 33.1447 24.5057 33.1066 26.1191L33.1058 26.1166V26.1231C33.1085 26.1861 33.1352 26.2457 33.1804 26.2896C33.2256 26.3335 33.2859 26.3584 33.349 26.3593C33.412 26.3601 33.473 26.3368 33.5194 26.2941C33.5657 26.2513 33.594 26.1925 33.5984 26.1296L33.5975 26.1385C33.6243 25.6852 33.5581 25.2312 33.4031 24.8043C33.248 24.3775 33.0073 23.9869 32.6958 23.6564C32.3843 23.326 32.0085 23.0627 31.5915 22.8828C31.1746 22.7028 30.7252 22.61 30.2711 22.61H30.2581C30.2251 22.6064 30.1917 22.6094 30.1599 22.619C30.1281 22.6285 30.0985 22.6444 30.073 22.6657C30.0475 22.687 30.0265 22.7132 30.0114 22.7427C29.9962 22.7723 29.9872 22.8046 29.9849 22.8378C29.9825 22.8709 29.9869 22.9042 29.9977 22.9356C30.0085 22.967 30.0256 22.9959 30.0478 23.0205C30.0701 23.0452 30.0971 23.0651 30.1272 23.0791C30.1574 23.093 30.19 23.1008 30.2232 23.1018Z"
            fill="currentColor"
          />
          <path
            d="M34.8919 26.6311V26.6295L34.8903 26.6287C34.8676 23.2901 32.6115 21.353 29.8045 21.3335C29.7393 21.3335 29.6767 21.3594 29.6306 21.4055C29.5845 21.4516 29.5586 21.5142 29.5586 21.5794C29.5586 21.6446 29.5845 21.7071 29.6306 21.7533C29.6767 21.7994 29.7393 21.8253 29.8045 21.8253C32.3113 21.8431 34.3799 23.5319 34.3993 26.6336C34.4032 26.6964 34.431 26.7554 34.4771 26.7984C34.5231 26.8415 34.5838 26.8653 34.6468 26.8649C34.7098 26.8646 34.7703 26.8402 34.8158 26.7968C34.8614 26.7533 34.8886 26.694 34.8919 26.6311Z"
            fill="currentColor"
          />
        </svg>
      );

    default:
      return null;
  }
};

interface SocialMediaLink {
  id: SocialMediaSvgProps["id"];
  link: string;
}

export const linksData: SocialMediaLink[] = [
  { id: "telegram", link: "https://google.com" },
  { id: "instagram", link: "https://google.com" },
  { id: "facebook", link: "https://google.com" },
  { id: "mobile", link: "https://google.com" },
];
