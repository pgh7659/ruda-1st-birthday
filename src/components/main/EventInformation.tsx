import React from "react";
import styles from "./EventInformation.module.css";
import { userType } from "../../types/mainTypes";

interface EventInformationProps {
  type: userType;
  place: {
    name: string;
    address: string;
  };
}
const EventInformation: React.FC<EventInformationProps> = ({ type, place }) => {
  return (
    <div className={styles.event_information__wrap}>
      <p className={styles.event_information__date}>
        {`06.03 (토) ${type === "family" ? "12:00 AM" : "05:00 PM"}`}
      </p>
      <div className={styles.event_information__place}>
        <p className={styles.event_information__place__name}>{place.name}</p>
        <p className={styles.event_information__place__address}>
          {place.address}
        </p>
      </div>
    </div>
  );
};

export default EventInformation;
