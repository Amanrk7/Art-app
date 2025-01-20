import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Provider, useSelector } from "react-redux";
import { store } from "./Store";
import { Header } from "./components/header";
import { Container } from "./components/Container";
import { ArtDetails } from "./components/ArtDetails";
import "./fanta.css";
import { PageNavigation } from "./components/PageNavigation";
import { BuyPage } from "./components/buy";
import { SellPage } from "./components/sell";
import { SupportPage } from "./components/support";
import { AboutPage } from "./components/about";
import {InviteLogin} from "./InviteLogin";
import { useState } from "react";
// import { CartTab } from "./components/CartTab";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const AppContent = () => {
    // const location = useLocation();
    // const backgroundImage = useSelector((state) => state.app.backgroundImage);
    // const isArtDetails = location.pathname.startsWith("/art/");

    // console.log("isArtDetails:", isArtDetails); // Log isArtDetails value
    // console.log("backgroundImage:", backgroundImage); // Log backgroundImage value

    return (
      <div
        id="appHeaderBack"
        // style={{
        //   backgroundColor: isArtDetails ? "black" : "",
        //   backgroundImage: isArtDetails ? "" : `url(${backgroundImage})`,
        // }}
      >
        <PageNavigation />
        <Header />
        {/* <Header isArtDetails={isArtDetails} /> */}

        <Routes>
          <Route path="/" element={<Container />} />
          <Route path="/art/:slug" element={<ArtDetails />} />
          <Route path="/buy" element={<BuyPage />} />
          <Route path="/sell" element={<SellPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    );
  };

  return (
    <Provider store={store}>
      <Router>
        {isAuthenticated ? (
          <AppContent />
        ) : (
          <InviteLogin onLogin={setIsAuthenticated} />
        )}
        {/* <CartTab/> */}
      </Router>
    </Provider>
  );
};

export default App;
