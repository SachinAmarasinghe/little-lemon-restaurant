import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Seo from "./Seo";

const Layout = ({ children }) => {
  return (
    <>
      <Seo title={"Little lemon"} description={"Little lemon is a fine dine restaurant with great food and online seat reservation convinience"} image={"../images/footer"} />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
