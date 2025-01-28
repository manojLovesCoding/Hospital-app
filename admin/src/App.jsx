import { useContext } from "react";
import { AdminContext } from "./context/AdminContext";
import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";

const App = () => {
  const { aToken } = useContext(AdminContext);
  return aToken ? (
    <div>
      <ToastContainer />
    </div>
  ) : (
    <>
      <Login />
      <ToastContainer />
    </>
  );
};

export default App;
