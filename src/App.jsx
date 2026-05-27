import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import WhatToDo from "./components/WhatToDo.jsx";
import Reasons from "./components/Reasons.jsx";
import SocialFollow from "./components/SocialFollow.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhatToDo />
        <Reasons />
        <SocialFollow />
      </main>
      <Footer />
    </>
  );
}
