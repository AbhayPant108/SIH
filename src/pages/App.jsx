import React , {useEffect} from 'react';
import { Routes, Route, Outlet ,useLocation} from 'react-router-dom';
import Layout from '../shared/Layout.jsx';
// import About from './About.jsx';


function App() {
  // Automatically goes to top
  const { pathname } = useLocation();
  const pages=['/login','/signup'].includes(pathname)

  useEffect(() => {
    window.scrollTo(0,0);
  }, [pathname]);

  


  return (
    <div className='min-h-screen flex items-center' >

      {/* wil not flicker on reload but will if we click on Navlink or Link */}
    {!pages?(<Layout>
      <Outlet />
    </Layout>):(<Outlet />)}
    </div>


  );

}
export default App


