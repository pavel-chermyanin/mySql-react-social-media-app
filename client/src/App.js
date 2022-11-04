import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Leftbar from "./components/leftbar/Leftbar";
import Rightbar from "./components/rightbar/Rightbar";
import { Outlet, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import "./app.scss";
import { memo, useContext, useEffect } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/authContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useSelector } from "react-redux";

const App = memo(() => {
  useEffect(() => {
    localStorage.removeItem("scroll");
  }, []);

  const queryClient = new QueryClient();
  const { currentUser } = useContext(AuthContext);

  // const { darkMode, toggle } = useContext(DarkModeContext);
  const darkMode = useSelector((state) => state.darkMode.isDarkMode);

  const Layout = memo(() => {
    return (
      <QueryClientProvider client={queryClient}>
        <div className={`theme-${darkMode ? "dark" : "light"}`}>
        {/* <div> */}
          
          <Navbar />
          <div style={{ display: "flex" }}>
            <Leftbar />
            <div style={{ flex: 6 }}>
              <Outlet />
            </div>
            <Rightbar />
          </div>
        </div>
      </QueryClientProvider>
    );
  });



  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
});

export default App;
