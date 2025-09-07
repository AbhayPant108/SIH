import React from 'react';
import { createRoot } from 'react-dom/client';
import {Authenticated} from './components/index.js'
import { Provider } from 'react-redux';
import store from './reduxconfig/store.js';
import { BrowserRouter ,RouterProvider,createBrowserRouter } from 'react-router-dom';
import App, {Home,Login,Signup,Contact,Consult,Medicines,Symptom,Records,Awareness,About} from './pages/index.js';
import './styles/global.css';


const router = createBrowserRouter([
  {
    path:"/",
    element:<App />,
    children:[
      {
        path:'',
        element:<Home />,
      },
      {
        path:'about',
        element:<About />
      },
      {
        path:'login',
        element:(<Authenticated isRequired={false}>
          <Login />
        </Authenticated>)
      },
      {
        path:'signup',
        element:(<Authenticated isRequired={false}>
          <Signup />
        </Authenticated>)
      },

      // TODO : Wrap with <Authenticated>
      {
        path:'consult',
        element:(<Authenticated>
          <Consult />
        </Authenticated>)
      },
      {
        path:'medicines',
        element:<Authenticated>
          <Medicines />
        </Authenticated>
      },
      {
        path:'symptoms',
        element:<Authenticated>
          <Symptom />
        </Authenticated>
      },
      {
        path:'records',
        element:<Authenticated>
          <Records />
        </Authenticated>
      },
      {
        path:'contact',
        element:<Authenticated>
          <Contact />
        </Authenticated>
      },
      {
        path:'awareness',
        element:<Authenticated>
          <Awareness />
        </Authenticated>
      }
    ]
  }
])

const rootElement = document.getElementById('root');
createRoot(rootElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);



