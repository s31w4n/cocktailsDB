import { useNavigation, Outlet } from 'react-router-dom';
import { Navbar, Loading } from '../components';
import { useState } from 'react';

const Home = ({ children }) => {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';
  const [category, setCategory] = useState('All');

  return (
    <>
      <Navbar />
      {isLoading ? (
        <Loading />
      ) : (
        children ?? <Outlet context={{ category, setCategory }} />
      )}
    </>
  );
};

export default Home;
