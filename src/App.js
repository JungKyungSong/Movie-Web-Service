import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/movie/:id" element={<Detail />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
//다른 Router인 HashRouter은 URL에 #이 붙음
//Link는 새로고침 없이도 유저를 다른 페이지로 이동시켜주는 컴포넌트
export default App;
