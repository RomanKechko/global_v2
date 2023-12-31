import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import AppHeader from "../app-header/app-header";
import Main from "../main/main";
import Portfolio from "../portfolio/portfolio";
import Partner from "../partner/partner";

const App: FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AppHeader />}>
          <Route index element={<Main />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/partner" element={<Partner />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
