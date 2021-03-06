import Home from "./pages/home/Home";
import SignIn from "./pages/signin/SignIn"
import List from "./pages/list/List"
import Single from "./pages/single/Single"
import New from "./pages/new/New"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./theme/dark.scss";
import "./theme/purple.scss";
import { useContext, useState } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { PurpleModeContext } from "./context/purpleModeContext";



function App() {

  const {darkMode} = useContext(DarkModeContext)
  const {purpleMode} = useContext(PurpleModeContext)

  return (
    <div className={darkMode ? "app dark" : "app" && purpleMode ? "app purple" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="signin" element={<SignIn />} />
            <Route path="users">
              <Route index element={<List/>}/>
              <Route path=":userId" element={<Single/>}/>
              <Route path="new" element={<New inputs={userInputs} title="Add New User"/>}/>
            </Route>
            <Route path="products">
              <Route index element={<List/>}/>
              <Route path=":productId" element={<Single/>}/>
              <Route path="new" element={<New inputs={productInputs} title="Add New Product"/>}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
