import './App.css';
import ProductItem from './components/ProductItem';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const products = [
    {
      id: "001",
      title: "Personalized Photo Puzzle",
      price: "99",
      img: "https://i.etsystatic.com/32450625/r/il/e3651b/3799996675/il_340x270.3799996675_devi.jpg",
      freeShipping: ['DE', 'AU', 'GB', 'NE', 'FR'],
      isNew: false,
      oneFree: true,
      isAvailable: true,
    },
    {
      id: "002",
      title: "Wooden Bike Constructor",
      price: "79",
      img: "https://i.etsystatic.com/30090255/r/il/edf755/4088601000/il_340x270.4088601000_nhbj.jpg",
      freeShipping: ['DE', 'AU'],
      isNew: true,
      sale: 25,
      isAvailable: true,
    },
    {
      id: "003",
      title: "Scottish Thistle",
      price: "55",
      img: "https://i.etsystatic.com/9921936/r/il/e8bcb6/1388144333/il_794xN.1388144333_h3l5.jpg",
      freeShipping: ['GB'],
      isNew: false,
      isAvailable: false,
    },
    {
      id: "004",
      title: "Customizable Bracelet",
      price: "29",
      img: "https://i.etsystatic.com/15544522/c/750/750/0/256/il/220540/2385278709/il_300x300.2385278709_o1sa.jpg",
      freeShipping: ['AU', 'NE', 'FR'],
      isNew: false,
      sale: 40,
      oneFree: true,
      isAvailable: true,
    },
    {
      id: "005",
      title: "Personalized Wooden Knife",
      price: "39",
      img: "https://i.etsystatic.com/39029683/r/il/983578/5189822334/il_300x300.5189822334_c908.jpg",
      freeShipping: ['GB', 'FR'],
      isNew: true,
      isAvailable: true,
    },
    {
      id: "006",
      title: "Espresso cups",
      price: "5",
      img: "https://i.etsystatic.com/17142610/c/2048/1627/0/420/il/753e1f/3755891602/il_340x270.3755891602_fs60.jpg",
      freeShipping: ['GB', 'FR', 'AU', 'BG'],
      isNew: true,
      isAvailable: true,
    },
    {
      id: "007",
      title: "Motherboard Cufflinks",
      price: "199",
      img: "https://i.etsystatic.com/6954083/r/il/9b6edb/2467501192/il_300x300.2467501192_dww3.jpg",
      freeShipping: ['GB', 'FR', 'NE', 'DE'],
      isNew: false,
      isAvailable: true,
    },
    {
      id: "008",
      title: "Cable Holder",
      price: "17",
      img: "https://i.etsystatic.com/24131158/c/2362/2362/272/251/il/66dac9/2783708654/il_300x300.2783708654_efc7.jpg",
      freeShipping: ['GB', 'FR', 'IT'],
      isNew: false,
      isAvailable: true,
    },
    {
      id: "009",
      title: "Hamster Earrings",
      price: "41",
      img: "https://i.etsystatic.com/22113135/c/1368/1368/701/543/il/69a87d/4662978662/il_300x300.4662978662_a1pa.jpg",
      freeShipping: ['GB', 'FR', 'NE', 'DE', 'AU',],
      isNew: true,
      isAvailable: true,
    },
    {
      id: "010",
      title: "Tech Support Mug",
      price: "9",
      img: "https://i.etsystatic.com/21287432/c/2173/2173/538/55/il/c332a0/4643835052/il_300x300.4643835052_4euz.jpg",
      freeShipping: ['GB', 'FR'],
      isNew: false,
      isAvailable: false,
    },
    {
      id: "011",
      title: "Computer Geek Gift",
      price: "348",
      img: "https://i.etsystatic.com/10090082/c/2248/2248/432/2/il/f7f2e6/5085760056/il_300x300.5085760056_9fer.jpg",
      freeShipping: ['AU', 'GB', 'DE', 'FR'],
      sale: 10,
      isNew: false,
      isAvailable: true,
    },
    {
      id: "012",
      title: "Personalized Bunny Toy",
      price: "72",
      img: "https://i.etsystatic.com/14669638/r/il/60583d/3776939816/il_300x300.3776939816_l0i4.jpg",
      freeShipping: ['GB', 'IT', 'NE', 'FR'],
      isNew: true,
      oneFree: true,
      sale: 10,
      isAvailable: true,
    },
    {
      id: "013",
      title: "Photography Lover Gift",
      price: "13",
      img: "https://i.etsystatic.com/6597123/r/il/afe219/1749506937/il_300x300.1749506937_p2z3.jpg",
      freeShipping: ['IT', 'NE', 'FR'],
      isNew: true,
      oneFree: true,
      isAvailable: false,
    },
  ];

  const sortedProducts = products.sort((a, b) => {
    return b.isNew - a.isNew
  }).sort ((a, b) => {
    return b.isAvailable - a.isAvailable
  })

  return (
    <>    
    <Header />
    <main>
      <h2>Top handmade products for you</h2>
      <div className="products-container">
        {sortedProducts.map((product) => {
          return (
          <ProductItem 
          key={product.id} 
          {...product}         
          />
          )
        })}      
      </div>      
    </main>   
    <Footer /> 
    </>
  );
}

export default App;
