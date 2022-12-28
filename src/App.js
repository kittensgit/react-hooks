import React from "react";
import Alert from "./alert/Alert";
import { AlertProvider } from "./alert/AlertContext";
import Main from "./Main";

export const AlertContext = React.createContext()

function App() {
  return (
    <AlertProvider>
      <div>
        <Alert />
        <Main toggle={()=>{}} />
      </div>
    </AlertProvider>
  );
}

export default App;
