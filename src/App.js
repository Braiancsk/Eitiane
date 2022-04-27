
import Form from './pages/Form';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
        <Route path="/" element={<Form />} />
      
    </Routes>
  );
}

export default App;
