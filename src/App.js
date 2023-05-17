// Components
import Header from "./components/headers";
import Nav from "./components/nav";
import Layout from "./components/layout";
import Container from "./components/container";
import Welcome from "./components/welcome";
import Grid from "./components/grid";

import { UserProvider } from "./context/user";

function App() {
  return (
    <>
      <Header />
      <Layout>
        <Nav />
        <UserProvider>
          <Container>
            <Welcome />
            <Grid />
          </Container>
        </UserProvider>
      </Layout>
    </>
  );
}

export default App;
