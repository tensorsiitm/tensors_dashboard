import "./App.css";
import MainLayout from "./pages/mainLayout/MainLayout";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ConfigStore } from "./redux/configStore";
const store = ConfigStore();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <MainLayout />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
