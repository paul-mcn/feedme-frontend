import type { NextPage } from "next";
import Head from "next/head";
import Layout from "components/Layout";
import styles from "styles/Home.module.css";
import { CTAButton } from "components/common/Button";
import SupportingImage from "components/LandingPage/SupportingImage";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Organise My Meals</title>
        <meta name="description" content="Meal planner" />
      </Head>
      <Layout
        layout="none"
        header="plain"
        headerClassName="text-black"
        className="bg-white"
      >
        <div className="flex flex-row mx-auto my-10 gap-10">
          <SupportingImage />
          <div className="flex flex-col gap-5 my-auto">
            <h1 className="text-black font-bold text-7xl">
              Simplify meal planning
            </h1>
            <p className="text-black w-1/2 ml-2">
              Discover an easier way to plan your meals and save time by having
              all your recipes in the one place. Choose from a wide range of
              meals or create your own.
            </p>
            <CTAButton />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Home;
