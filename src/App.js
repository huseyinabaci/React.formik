import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GeneralForm from './components/GeneralForm';
import PortalForm from './components/PortalForm';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<GeneralForm />} />
        <Route path="/portal" element={<PortalForm />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
