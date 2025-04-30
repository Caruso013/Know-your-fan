import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import UserForm from "./pages/UserForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<UserForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
