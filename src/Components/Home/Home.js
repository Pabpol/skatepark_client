import { Fragment } from "react";
import Header from "./Header/Header";
import TablaParticipantes from "./TablaParticepantes/TablaParticipantes";
import Usuario from "./Usuario/Usuario";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <TablaParticipantes />
      <Usuario />
    </Fragment>
  );
};
export default Home;