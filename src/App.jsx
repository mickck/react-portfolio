import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import IndexPage from "./pages/IndexPage";
import Projects from "./pages/Project";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/project" element={<Projects />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
