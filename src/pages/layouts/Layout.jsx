import React from "react";
import Header from "../../components/LayoutComponents/Header";
import FooterWithLogo from "../../components/LayoutComponents/Footer";
import TItleIndex from "../../components/LayoutComponents/TItleIndex";

function Layout(props) {
     return (
          <div className=" h-screen " >
               
               <Header title="Numericonversor" />
               {props.children}
               <FooterWithLogo />
          </div>
     );
}

export default Layout;