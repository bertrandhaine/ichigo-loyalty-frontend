import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CustomerTierPage from "./components/CustomerTierPage";
import OrderHistoryPage from "./components/OrderHistoryPage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/customer/:id/tier" element={<CustomerTierPage />} />
        <Route
          path="/customer/:id/order-history"
          element={<OrderHistoryPage />}
        />
      </Routes>
    </Router>
  );
};

export default App;
