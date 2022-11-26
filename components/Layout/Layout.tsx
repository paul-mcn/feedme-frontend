import * as React from "react";
import Header from "components/Header";
import Footer from "components/Footer";

type Props = {
  children: React.ReactNode;

  /**
   * `default` - Adds width and margin to children inside `<Header />` and `<Footer />`
   *
   * `none` - Only includes `<Header />` and `<Footer />`
   */
  layout?: "none" | "default";
  /**
   * `default` - header has default styling
   *
   * `plain` - header has no background
   *
   * `none` - header is hidden
   */
  header?: "none" | "default" | "plain";
  className?: string;
  /**
   * classes applied to header if `header` prop = `"plain"`
   */
  headerClassName?: string;
};

const Layout = ({
  children,
  layout = "default",
  header = "default",
  className = "",
  headerClassName = "",
}: Props) => {
  return (
    <div className={className}>
      {header !== "none" && (
        <Header header={header} className={headerClassName} />
      )}
      {layout === "default" ? (
        <div className="bg-white">
          <div className="mx-auto w-4/5 py-10"></div>
          {children}
        </div>
      ) : (
        children
      )}
      <Footer />
    </div>
  );
};

export default Layout;
