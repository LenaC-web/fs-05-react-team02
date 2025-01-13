import "./style/section4.css";
import { Layout } from "./layout";
import { Cellphone } from "./components/Cellphone";
import { TextBox } from "./components/TextBox";

export const Section4 = () => {
  return (
    <Layout>
      <TextBox />
      <Cellphone />
    </Layout>
  );
};
