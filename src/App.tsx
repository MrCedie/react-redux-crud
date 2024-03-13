import "./App.css";
import { Provider } from "react-redux";
import store from "./states/store/store";
import UserScreen from "./presentation/user/screens/userScreen";

function App() {
  return (
    <Provider store={store}>
      <UserScreen></UserScreen>
    </Provider>
  );
}

export default App;
