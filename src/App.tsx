import Banner from './components/Banner/Banner';
import Container from './components/Container/Container';
import Header from './components/Header/Header';
import Users from './components/Users/Users';
import UserRegistration from './components/UserRegistration/UserRegistration';

const App = () => {
  return (
    <>
      <Header />
      <Container>
        <Banner />
        <Users />
        <UserRegistration />
      </Container>
    </>
  );
};

export default App;
