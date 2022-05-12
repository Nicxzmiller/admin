import Home from "./pages/home/Home";
import SignIn from "./pages/signin/SignIn"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="signin" element={<SignIn />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
