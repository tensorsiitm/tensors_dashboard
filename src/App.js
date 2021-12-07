import './App.css';
import MainLayout from './pages/mainLayout/MainLayout';
import FirstPage from './pages/firstpage/FirstPage';

import { BrowserRouter} from "react-router-dom";




function App() {
  return (
    <BrowserRouter>
      <div className="App">
     
       <FirstPage/>
      </div>
    </BrowserRouter>
  );
}

export default App;
