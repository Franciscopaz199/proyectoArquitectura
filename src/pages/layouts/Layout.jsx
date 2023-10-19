import React from "react";
import Header from "../../components/LayoutComponents/Header";
import FooterWithLogo from "../../components/LayoutComponents/Footer";
import TItleIndex from "../../components/LayoutComponents/TItleIndex";

function Layout(props) {
     return (
          <div className="w-full min-h-screen flex flex-col">
               <Header title="My App" />
               {props.children}
               <FooterWithLogo />
          </div>
     );
}

export default Layout;