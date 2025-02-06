import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import BlogsSectionBlogDark1 from '../components/blog-dark/BlogsSectionBlogDark1';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Blogs() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <BlogsSectionBlogDark1 />
    </React.Fragment>
  );
}

