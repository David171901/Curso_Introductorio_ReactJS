import React from "react";
import { TodoProvider } from "../TodoContext/index.js";
import { AppUI } from "./AppUI.js";


function App() {

  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}

export default App;