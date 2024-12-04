import "./index.css";
import { TodoProvider } from "../src/components/TodoContext";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { HomePage } from "./routes/home/HomePage";
import NotFoundPage from "./routes/notFound/NotFoundPage";
import EditPage from "./routes/edit/EditPage";
import NewPage from "./routes/new/NewPage";

function App() {
  return (
    <TodoProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/edit/:id" element={<EditPage />} />
          <Route path="/new" element={<NewPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </TodoProvider>
  );
}

export default App;
