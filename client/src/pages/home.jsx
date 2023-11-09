import Header from "../components/Header";
import CardCollections from "../components/CardCollections";
import Pagination from "../components/Pagination";

const Home = () => {
  return (
    <>
      <section className="dark:bg-gray-800 dark:text-gray-100 rounded-none">
        <Header />
        <CardCollections />
        <Pagination />
      </section>
    </>
  );
};

export default Home;
