import React, { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import { ContextProps, UserAuth } from '../context/AuthContext';

export const PrivateRoute = ({ children }: { children: ReactElement }) => {
  const { currentUser } = UserAuth() as ContextProps;

  if (!currentUser) {
    <Navigate to='/' replace={true} />;
  }

  return <div>{children}</div>;
};
