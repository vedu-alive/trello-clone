import { DndProvider } from "react-dnd";
import "./App.css";
import { AppProvider } from "./context";
import Router from "./router";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  return (
    <div>
      <DndProvider backend={HTML5Backend}>
        <AppProvider>
          <Router />
        </AppProvider>
      </DndProvider>
    </div>
  );
}

export default App;
