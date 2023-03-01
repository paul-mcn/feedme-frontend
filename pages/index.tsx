import type { NextPage } from "next";
import Head from "next/head";
import Layout from "components/Layout";
import styles from "styles/Home.module.css";
import { CTAButton } from "components/common/Button";
import SupportingImage from "components/LandingPage/SupportingImage";
import Headline from "components/LandingPage/Headline";
import SubHeadline from "components/LandingPage/SubHeadline";
import Section from "components/common/Section";
import BenefitsSection from "components/LandingPage/BenefitsSection";
import SecondaryCTASection from "components/LandingPage/SecondaryCTASection";

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
        className="bg-white text-black"
      >
        <Section>
          <div className="flex flex-row mx-auto mt-10 gap-10">
            <SupportingImage />
            <div className="flex flex-col gap-5 my-auto">
              <Headline />
              <SubHeadline />
              <CTAButton label="Get Preppin" />
            </div>
          </div>
        </Section>
        <BenefitsSection />
        {/* Social proof */}
        <SecondaryCTASection />
        {/* Features */}
        {/* Resources */}
        {/* Success Indicators */}
        {/* Add join now button */}
      </Layout>
    </div>
  );
};

export default Home;
