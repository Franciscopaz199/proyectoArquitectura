import React from "react";
import Header from "../../components/LayoutComponents/Header";
import FooterWithLogo from "../../components/LayoutComponents/Footer";
import TItleIndex from "../../components/LayoutComponents/TItleIndex";

function Layout(props) {
     return (
          <div className=" min-h-screen dark:bg-gray-900 dark:text-white ">
               
               <Header title="ArquiMath" />
               {props.children}
               <FooterWithLogo />
          </div>
     );
}

export default Layout;