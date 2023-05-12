import styles from "../page.module.css";
import MainContent from "../../components/main/MainContent";
import KakaoMap from "../../components/KakaoMap";
import ImagesPreview from "../../components/ImagesPreview";
import { familyImages } from "../../data/images";

const NamePage = ({ params }: { params: { name: string } }) => {
  const { name } = params;
  return (
    <main className={styles.main}>
      <MainContent type="friend">
        {<ImagesPreview images={familyImages} />}
      </MainContent>
      <KakaoMap />
    </main>
  );
};

export default NamePage;
