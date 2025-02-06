import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import ContentSectionContentDark1 from '../components/content-dark/ContentSectionContentDark1';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Content() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <ContentSectionContentDark1 />
    </React.Fragment>
  );
}

