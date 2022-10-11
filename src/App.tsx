import React from "react";
import { useAppDispatch, useAppSelector } from "./hook";
import Main from "./pages/Main/Main";
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
      <Main getUsers={getUsers}/>
    </div>
  );
};

export default App;
