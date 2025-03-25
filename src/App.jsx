import styles from "./App.module.css";
import TaskInput from "./components/TaskInput/TaskInput";
import TaskList from "./components/TaskList/TaskList";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../store/authSlice";
import Button from "./components/Button/Button";
import { useEffect } from "react";
import { fetchWeatherByLocation } from "../store/weatherSlice";


function App() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);


  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          dispatch(fetchWeatherByLocation({ lat: latitude, lon: longitude }));
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []); 
  

  const handleLogin = () => {
    dispatch(login());
  };

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div className={styles.app}>
      {isAuthenticated ? (
        <>
          <Button className={styles.logoutBtn}  onClick={handleLogout}>Logout</Button>
          <h1>Task Manager</h1>
          <TaskInput />
          <TaskList  />
        </>
      ) : (
        <Button className={styles.loginBtn} onClick={handleLogin}>Login</Button>
      )}
    </div>
  );
}

export default App;
