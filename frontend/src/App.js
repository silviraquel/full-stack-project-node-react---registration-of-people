import Header from "./components/Header";
import Footer from "./components/Footer";
import People from "./components/People";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <div>
        <Header />
      </div>

      <div>
        <People />
      </div>

      <div>
        <Footer />
      </div>

    </div>
  )
}

export default App;
