import { Outlet } from 'react-router-dom';

import { Header } from '../components/Header/Header';
import { MainContainer } from '../styles/GlobalStyles';

export const Layout = () => {
  return (
    <>
      <MainContainer>
        <Header />
        <Outlet />
      </MainContainer>
    </>
  );
};
