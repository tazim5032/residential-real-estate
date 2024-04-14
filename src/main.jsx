import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home.jsx';
import Root from './Root.jsx';
import ErrorPage from './ErrorPage.jsx';
import Login from './Pages/Login';
import Register from './Pages/Register';
import FirebaseProvider from './FirebaseProvider/FirebaseProvider';
import AllProperties from './Pages/AllProperties';
import Details from './Pages/Details';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/data.json'),
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/properties',
        element: <AllProperties></AllProperties>,
        loader: () => fetch('/data.json'),
      },
      {
        path: '/details/:resid',
        element: <PrivateRoute>
          <Details></Details>
        </PrivateRoute>,
        loader: () => fetch('/data.json'),
      },


    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <FirebaseProvider>
      <RouterProvider router={router} />
    </FirebaseProvider>
  </>
)
