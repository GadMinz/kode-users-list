import React from "react";
import { Route, Routes } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./hook";
import Main from "./pages/Main/Main";
import Profile from "./pages/Profile/Profile";
import { fetchUsers } from "./redux/slices/usersSlice";

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const { category } = useAppSelector((state) => state.filters);
  const { items } = useAppSelector((state) => state.users);
  const getUsers = async () => {
    dispatch(fetchUsers(category));
  };
  React.useEffect(() => {
    getUsers();
  }, [category]);
  const getUserById = (id: string) => {
    return items.filter((item) => item.id === id);
  };
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Main getUsers={getUsers} />} />
        <Route path="/:id" element={<Profile getUserById={getUserById} />} />
      </Routes>
    </div>
  );
};

export default App;
