import Navbar from '../components/Navbar';
import Loading from '../components/Loading';
import { Outlet, useNavigation } from 'react-router-dom';

const RootLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  return (
    <>
      <Navbar />
      {isLoading ? <Loading /> : <Outlet />}
    </>
  );
};

export default RootLayout;
