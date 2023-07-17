import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from './GlobalStyle'
import Home from "./pages/Home";


function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" Component={Home}/>
      </Routes>
    </Router>
  );
}

export default App;
