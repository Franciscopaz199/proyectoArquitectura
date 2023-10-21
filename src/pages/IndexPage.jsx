import React from "react";
import Layout from "./layouts/Layout";
import ContainerApp from "../components/LayoutComponents/ContainerApp";
import TItleIndex from "../components/LayoutComponents/TItleIndex";
import ConversionForm from "../components/Forms/ConversionForm";
const IndexPage = () => (
     <Layout>
          <ContainerApp>
               <TItleIndex title="Calculadora de Sistemas Numéricos" subtitle="¿Necesitas cambiar de sistema numérico? Nuestra calculadora lo hace de manera simple y elegante. Lo tienes todo en un solo lugar." />
               <ConversionForm/>          
          </ContainerApp>
     </Layout>
);

export default IndexPage;