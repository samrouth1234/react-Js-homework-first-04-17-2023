import Profile from "./componenst/Profile";
import Navbar from "./componenst/Navbar";
import Footer from "./componenst/Footer";
import "./App.css";
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <main>
        <Profile></Profile>
      </main>
      <Footer></Footer>
    </div>
  );
}
export default App;
