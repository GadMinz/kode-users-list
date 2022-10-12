import React from "react";
import { Route, Routes } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./hook";
import Main from "./pages/Main/Main";
import Profile from "./pages/Profile/Profile";
import { fetchUsers } from "./redux/slices/usersSlice";

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const { category } = useAppSelector((state) => state.filters);
  const getUsers = async () => {
    dispatch(fetchUsers(category));
  };
  React.useEffect(() => {
    getUsers();
  }, [category]);

  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Main getUsers={getUsers} />} />
        <Route path="/:id" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default App;
