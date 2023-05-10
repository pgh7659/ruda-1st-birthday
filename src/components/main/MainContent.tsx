import Image from "next/image";
import React from "react";
import styles from "./MainContent.module.css";
import MainImageNuki from "public/images/main_nuki.png";
import EventInformation from "./EventInformation";
import Message from "./Message";
import { userType } from "../../types/mainTypes";

interface MainContentProps {
  type: userType;
}

const MainContent = ({
  type,
  children,
}: React.PropsWithChildren<MainContentProps>) => {
  return (
    <div className={styles.common__section}>
      <div className={styles.title}>
        <p className={styles.title__name}>박 루 다</p>
        <p className={styles.title__desc}>첫 생 일</p>
      </div>

      <div className={styles.image}>
        <Image
          src={MainImageNuki}
          priority={true}
          fill={true}
          alt={""}
          style={{ borderRadius: "30px", padding: "20px" }}
        />
      </div>

      <Message />
      {children}
      <EventInformation
        type={type}
        place={{
          name: "어라운드테이블",
          address:
            "경기도 고양시 일산동구 연리지로 51 라몬테이탈리아노 5층 504호",
        }}
      />
    </div>
  );
};

export default MainContent;
