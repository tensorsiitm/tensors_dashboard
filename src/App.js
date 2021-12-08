import "./App.css";
import FirstPage from './pages/firstpage/FirstPage';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ConfigStore } from "./redux/configStore";
const store = ConfigStore();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <FirstPage />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

  export default App;
