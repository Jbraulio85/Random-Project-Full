import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../componetes/Home";
import { NotFound } from "../componetes/NotFound";

export const DashboardPage = () => {
  return (
    <div className="max-w-screen-lg mx-auto pt-20 px-4 sm:px-6 lg:px-8">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
};
