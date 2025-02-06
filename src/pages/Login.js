import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import LoginSectionHttpCodesDark1 from '../components/http-codes-dark/LoginSectionHttpCodesDark1';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Login() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <LoginSectionHttpCodesDark1 />
    </React.Fragment>
  );
}

