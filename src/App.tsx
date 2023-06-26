import Banner from './components/Banner/Banner';
import Container from './components/Container/Container';
import Header from './components/Header/Header';
import Users from './components/Users/Users';

const App = () => {
  return (
    <>
      <Header />
      <Container>
        <Banner />
        <Users />
      </Container>
    </>
  );
};

export default App;
