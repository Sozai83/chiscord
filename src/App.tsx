import React, { useEffect, useState } from "react";
import "./App.scss";
import { AnyIfEmpty, useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import Sidebar from "./component/sidebar/Sidebar";
import Chat from "./component/chat/Chat";
import Login from "./component/login/Login";
import { auth } from "./firebase";
import { login, logout } from "./features/userSlice";
import { ErrorBoundary } from "react-error-boundary";
import { fallbackRender } from "./utils/ErrorFallback";

function App() {
  const user = useAppSelector((state) => state.user.user);
  const [hideChannelList, setHideChannelList] = useState(true);
  const setHideChannelListHandler = (state: any) => {
    setHideChannelList(state);
  };

  const dispatch = useAppDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((loginUser) => {
      if (loginUser) {
        dispatch(
          login({
            uid: loginUser.uid,
            photo: loginUser.photoURL,
            email: loginUser.email,
            displayName: loginUser.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <div className="App">
      {user ? (
        <>
          <ErrorBoundary FallbackComponent={fallbackRender}>
            {/* side bar */}
            <Sidebar
              hideChannelList={hideChannelList}
              setHideChannelListHandler={setHideChannelListHandler}
            />
          </ErrorBoundary>

          {/* Home Chat */}
          <div
            className="chat"
            onClick={() => {
              if (!hideChannelList) {
                setHideChannelListHandler(true);
              }
            }}
          >
            <Chat
              hideChannelList={hideChannelList}
              setHideChannelListHandler={setHideChannelListHandler}
            />
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
