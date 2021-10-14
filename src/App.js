import './App.css';
import MainLayout from './pages/mainLayout/MainLayout';
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MainLayout />
      </div>
    </BrowserRouter>
  );
}

export default App;
