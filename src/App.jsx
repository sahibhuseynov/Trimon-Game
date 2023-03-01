import { Outlet } from 'react-router-dom';
import Navbar from './components/Ui/navbar/Navbar';
import Home from './views/Home/Home';
import Footer from './components/Ui/footer/Footer';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const Layout = () => {
  return (
    <div className='root-padding'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      }
    ]
  }
]);

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
