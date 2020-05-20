import React from "react";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import UserHomepage from "./Components/UserHomepage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <UserHomepage />
      </Provider>
    </div>
  );
}

export default App;
