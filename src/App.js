import "./App.css";
import { Header } from "./components/header";
import { Content } from "./components/Content/content";
import { Footer } from "./components/footer";
import { ContentNewsModal } from "./components/modals/contentNewsModal";
import { Link, Navigate, Route, Routes, useParams } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <ContentNewsModal />
      <Header />
      <div className="flex">
        <div className="dropdown dropdown-bottom">
          <label
            tabIndex={0}
            className="btn ml-1 rounded-none bg-transparent border-x-maroon border-t-0 border-b-maroon  hover:bg-maroon hover:text-white text-black"
          >
            Select another country
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow  w-52 ml-1 bg-maroon text-white"
          >
            <li>
              <Link to="country/pl">
                <img src="https://flagcdn.com/16x12/pl.png" />
                Poland
              </Link>
            </li>
            <li>
              <Link to="country/ua">
                <img src="https://flagcdn.com/16x12/ua.png" />
                Ukraine
              </Link>
            </li>
            <li>
              <Link to="country/us">
                <img src="https://flagcdn.com/16x12/us.png" />
                United States
              </Link>
            </li>
            <li>
              <Link to="country/cn">
                <img src="https://flagcdn.com/16x12/cn.png" />
                China
              </Link>
            </li>
            <li>
              <Link to="country/br">
                <img src="https://flagcdn.com/16x12/br.png" />
                Brazil
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Navigate to="country/us" replace />}></Route>
        <Route path="/country" index element={<Content />}></Route>
        <Route path="/country/:id" element={<Content />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
