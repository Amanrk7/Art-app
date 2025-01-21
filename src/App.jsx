import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Store";
import { Container } from "./components/Container";
import { ArtDetails } from "./components/ArtDetails";
import "./fanta.css";
import { PageNavigation } from "./components/PageNavigation";
import { BuyPage } from "./components/buy";
import { SellPage } from "./components/sell";
import { SupportPage } from "./components/support";
import { AboutPage } from "./components/about";
import { Footer } from "./components/Footer";
import SignIn from "./components/signIn";
import Profile from "./components/profile";
import { auth } from "./components/firebase";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleSignIn = (signedInUser) => {
    setUser(signedInUser);
  };

  const AppContent = () => (
    <>
      <PageNavigation />
      <div id="appHeaderBack">
        <Routes>
          <Route path="/" element={<Container />} />
          <Route path="/art/:slug" element={<ArtDetails />} />
          <Route path="/buy" element={<BuyPage />} />
          <Route path="/sell" element={<SellPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/userLogin" element={<SignIn />} />
          <Route path="/profile" element={<Profile user={user} />} />
        </Routes>
      </div>
      <Footer />
    </>
  );

  return (
    <Provider store={store}>
      <Router>
        {user ? <AppContent /> : <SignIn onSignIn={handleSignIn} />}
      </Router>
    </Provider>
  );
};

export default App;
