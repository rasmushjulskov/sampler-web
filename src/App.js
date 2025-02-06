import React from 'react';
import {
  Routes,
  Route
} from 'react-router-dom';

import IndexPage from './pages/Index.js';
import BlogsPage from './pages/Blogs.js';
import ContentPage from './pages/Content.js';
import LoginPage from './pages/Login.js';

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
         
      <Route path="/blogs" element={<BlogsPage />} />
         
      <Route path="/content" element={<ContentPage />} />
         
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
