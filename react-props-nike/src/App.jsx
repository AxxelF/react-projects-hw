import './App.css';
import Header from './components/Header';
import ProductsContainer from './components/ProductsContainer';

function App() {
  return (
  <>
  <div className="wrapper">
    <Header />
    <main>
      <h1>Our Bestsellers:</h1>      
      <ProductsContainer />
    </main>
      </div>
      </>
  )
}

export default App;
