import React from "react";
import Layout from "components/Layout";
import Head from "next/head";

const MealsPage = (props: object) => {
  return (
    <Layout layout="default">
      <Head>
        <title>Meals</title>
        <meta name="description" content="Choose from a wide selection of meals" />
      </Head>
      <div className="grid">
      
      </div>
    </Layout>
  );
};

export default MealsPage;
