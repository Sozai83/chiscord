import React from "react";
import "./App.scss";
import Sidebar from "./component/sidebar/Sidebar";
import Chat from "./component/chat/Chat";

function App() {
  return (
    <div className="App">
      {/* side bar */}
      <Sidebar />

      {/* Home Chat */}
      <div className="chat">
        <Chat />
      </div>
    </div>
  );
}

export default App;
