import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages';
import { Detail } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
