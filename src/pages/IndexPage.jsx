import React from "react";
import Layout from "./layouts/Layout";
import ContainerApp from "../components/LayoutComponents/ContainerApp";
import TItleIndex from "../components/LayoutComponents/TItleIndex";
import ConversionForm from "../components/Forms/ConversionForm";
const IndexPage = () => (
     <Layout>
          <ContainerApp>
               <TItleIndex title="The Pa's Calculator" subtitle="Use the calculator to calculate the Pa's of your employees" />
               <ConversionForm/>          
          </ContainerApp>
     </Layout>
);

export default IndexPage;