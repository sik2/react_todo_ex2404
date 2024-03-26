import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import TodoList from "./page/TodoList";
import TodoDetail from "./page/TodoDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="/todos" element={<TodoList />}></Route>
        <Route path="/todos/:id" element={<TodoDetail />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
