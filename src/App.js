// Components
import Header from "./components/headers";
import Nav from "./components/nav";
import Layout from "./components/layout";
import Container from "./components/container";
import Welcome from "./components/welcome";
import Grid from "./components/grid";

function App() {
  return (
    <>
      <Header />
      <Layout>
        <Nav />
        <Container>
          <Welcome name="Thomas" />
          <Grid />
        </Container>
      </Layout>
    </>
  );
}

export default App;
