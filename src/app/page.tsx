import styles from "./page.module.css";
import MainContent from "../components/main/MainContent";
import KakaoMap from "../components/KakaoMap";
import ImagesPreview from "../components/ImagesPreview";
import { familyImages } from "../data/images";

export default function Home() {
  return (
    <main className={styles.main}>
      <MainContent type="family">
        {<ImagesPreview images={familyImages} />}
      </MainContent>
      <KakaoMap />
    </main>
  );
}
