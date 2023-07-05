import { useState } from 'react';
import { IUser } from './interfaces';

import Banner from './components/Banner/Banner';
import Container from './components/Container/Container';
import Header from './components/Header/Header';
import UserRegistration from './components/UserRegistration/UserRegistration';
import Users from './components/Users/Users';

const App = () => {
  const [data, setData] = useState<IUser[]>([]);
  const [page, setPage] = useState<number>(1);

  return (
    <>
      <Header />
      <Container>
        <Banner />
        <Users data={data} setData={setData} page={page} setPage={setPage} />
        <UserRegistration setData={setData} />
      </Container>
    </>
  );
};

export default App;
