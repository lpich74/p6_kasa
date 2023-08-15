import React from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import './index.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import Error from './pages/Error';
import About from './pages/About';
import Housing from './pages/Housing';
import { housingProfiles } from './datas/logements';

const housingLoader = async ({ params }) => {
  const { id } = params;

  const housingData = housingProfiles.find((profile) => profile.id === id);

  if (housingData) {
    return {
      housingData: housingData
    };
  } else {
    throw new Error("Impossible d'afficher les données");
  }
};

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Router>    
//       <Layout>
//         <Routes>
//           <Route
//             path="/"
//             element={<Home />}
//           />
//           <Route
//             path="/housing/:id"
//             loader={housingLoader}
//             element={<Housing />} 
//             errorElement={<Error />}
//           />
//           <Route
//             path="/about"
//             element={<About />}
//           />
//           <Route
//             path="*"
//             element={<Error />}
//           />
//         </Routes>
//       </Layout>
//     </Router>
//   </React.StrictMode>
// );

const router = createHashRouter(
  createRoutesFromElements([
     <Route
      path="/"
      element={<Layout><Home /></Layout>}
    />, <Route
      path="/housing/:id"
      loader={housingLoader}
      element={<Layout><Housing /></Layout>}
      errorElement={<Layout><Error /></Layout>}
    />, <Route
      path="/about"
      element={<Layout><About /></Layout>}
    />, <Route
      path="*"
      element={<Layout><Error /></Layout>}
    />])
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);