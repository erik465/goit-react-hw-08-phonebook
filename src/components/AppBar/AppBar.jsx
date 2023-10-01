import React from 'react'
import  UserMenu  from '../UserMenu/UserMenu';
import  AuthNav  from '../AuthNav/AuthNav';
import { useAuth } from 'hooks';

const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header >
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}

export default AppBar
