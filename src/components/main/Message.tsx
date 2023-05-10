import React from "react";
import styles from "./Message.module.css";
const GRATITUDE_GREETING =
  "사랑스런 우리 루다가 많은 관심과 사랑 속\n드디어 첫번째 생일을 맞이하였습니다!\n루다네가 정성껏 준비한 자리에서 함께 축하해주세요!";
const Message = ({ customMessage }: { customMessage?: string }) => {
  return (
    <div className={styles.message__wrap}>
      <p className={styles.message__gratitude}>
        {customMessage || GRATITUDE_GREETING}
      </p>
      <div className={styles.message__parents}>
        <p className={styles.message__parents__title}>아빠</p>
        <p className={styles.message__parents__name}>박길현</p>
        <p className={styles.message__parents__title}>엄마</p>
        <p className={styles.message__parents__name}>이우빈</p>
      </div>
    </div>
  );
};

export default Message;
