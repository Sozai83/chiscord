import React from "react";
import "./App.scss";
import { useSelector } from "react-redux";
import { useAppSelector } from "./app/hooks";
import Sidebar from "./component/sidebar/Sidebar";
import Chat from "./component/chat/Chat";
import Login from "./component/login/Login";

function App() {
  const user = useAppSelector((state) => state.user);

  return (
    <div className="App">
      {user ? (
        <>
          {/* side bar */}
          <Sidebar />
          {/* Home Chat */}
          <div className="chat">
            <Chat />
          </div>
        </>
      ) : (
        <>
          <Login />
        </>
      )}
    </div>
  );
}

export default App;
