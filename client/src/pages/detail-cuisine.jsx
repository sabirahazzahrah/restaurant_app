import { useParams } from "react-router-dom";
import DetailCuisine from "../components/DetailCuisine";

const DetailPage = () => {
  const id = useParams();
  return (
    <>
      <DetailCuisine />
    </>
  );
};

export default DetailPage;
