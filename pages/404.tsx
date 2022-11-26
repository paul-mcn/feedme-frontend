import Layout from "components/Layout";
import { LinkButton } from "components/common/Button";

const Custom404 = () => {
  return (
    <Layout>
      <div className="w-4/5 mx-auto py-10 text-black">
        <div className="font-bold">404 • This page could not be found.</div>
        <LinkButton label="Report an issue" href="report" />
      </div>
    </Layout>
  );
};

export default Custom404;
