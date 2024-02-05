import './App.css';

function App() {
  return <div className='App'>
    <body>    
      <header className='header'>
        <div className="container">
        <svg className='header-logo'>
          <use href='./img/icons.svg#icon-logo'></use>
        </svg>
        <p className="logo-txt">Rhythm</p>
        <nav>
          <ul className="nav-list">
            <li className="nav-item">Store</li>
            <li className="nav-item">Collections</li>
            <li className="nav-item">Support</li>
          </ul>
        </nav>
        </div>
      </header>
    <main>
      <hero className="hero">
        <div className="container">
        <h1 className="hero-title">
        Browse top quality <span className='orange-text'>Guitars</span> online
        </h1>
        <p className="hero-text">Explore 50k+ latest collections of branded guitars online with Rhythm.</p>
        <div className="hero-stores">
        <a href="" className="hero-app-link">
          <div className="hero-app-wrap">
            <p>Get the App</p>
          </div>
        </a>        
        <svg className="stores">
          <use href='./img/icons.svg#icon-stores'></use>
        </svg>
        </div>
        <img src="./img/hero.png" alt="" className="hero-img" />
        <div className="hero-logo">
          <svg className='header-logo'>
            <use href='./img/icons.svg#icon-logo'></use>
          </svg>
        </div>
        </div>
      </hero>
      <section className='store'>
        <div className="container">
          <h2 className="store-title">Check out the <span className='orange-text'>Store</span></h2>
          <div className="store-texts">
            <p className="store-text uppercase">NEW ON THE BOARD</p>
            <p className="store-text lowercase">view all</p>
          </div>
          <div className="cards new">
            <ul className="card-list new">
              <li className="card-item">
                <img src="./img/lespaul.png" alt="" className="card-img" />
                <p className="card-name">The Essential Les Paul</p>
                <p className="card-price">$1,299.00</p>
              </li>
              <li className="card-item">
                <img src="./img/bass.png" alt="" className="card-img" />
                <p className="card-name">Active Precision Bass® PH V</p>
                <p className="card-price">$4,199.00</p>
              </li>
              <li className="card-item">
                <img src="./img/j45.png" alt="" className="card-img" />
                <p className="card-name">J-45 Standard</p>
                <p className="card-price">$1,699.00</p>
              </li>
            </ul>
          </div>
              <div className="store-texts">
                <p className="store-text uppercase">TOP SELLING</p>
                <p className="store-text lowercase">view all</p>
              </div>
              <div className="cards top">
                <ul className="card-list top">
                  <li className="card-item">
                    <img src="./img/redondo.png" alt="" className="card-img" />
                    <p className="card-name">Redondo Special</p>
                    <p className="card-price">$2,800.00</p>
                  </li>
                  <li className="card-item">
                    <img src="./img/hummingbird.png" alt="" className="card-img" />
                    <p className="card-name">Hummingbird Standard</p>
                    <p className="card-price">$2,099.00</p>
                  </li>
                  <li className="card-item">
                    <img src="./img/stratocaster.png" alt="" className="card-img" />
                    <p className="card-name">Professional II Stratocaster®</p>
                    <p className="card-price">$3,199.00</p>
                  </li>
                </ul>
              </div>
        </div>
      </section> 
      <section className='categories'>
        <div className="container">
          <h2 className='categories-title'>Choose based on <span className='orange-text'>Categories</span></h2>
          <ul className='categories-list'>
            <li className='categories-item acoustic'>
              <img src="./img/acoustic.png" alt="" />
              <span className='categories-item-text'>Acoustic</span>
            </li>
            <li className='categories-item electric'>
              <img src="./img/electric.png" alt="" />
              <span className='categories-item-text'>Electric</span>
            </li>
            <li className='categories-item basses'>
              <img src="./img/basses.png" alt="" />
              <span className='categories-item-text'>Basses</span>
            </li>
            <li className='categories-item collections'>
              <img src="./img/collections.png" alt="" />
              <span className='categories-item-text'>Collections</span>
            </li>
          </ul>
        </div>
      </section>     
      <section className='brands'>
        <div className="container">
          <h2>Featuring the <span className='orange-text'>Best Brands</span></h2>
          <ul className='brands-list'>
            <li className='brands-item'>
              <img src="./img/ibanez.png" alt="" />
            </li>
            <li className='brands-item'>
              <img src="./img/taylor.png" alt="" />
            </li>
            <li className='brands-item'>
              <img src="./img/martin.png" alt="" />
            </li>
            <li className='brands-item'>
              <img src="./img/gretsch.png" alt="" />
            </li>
            <li className='brands-item'>
              <img src="./img/fender.png" alt="" />
            </li>
            <li className='brands-item'>
              <img src="./img/takamine.png" alt="" />
            </li>
            <li className='brands-item'>
              <img src="./img/gibson.png" alt="" />
            </li>
            <li className='brands-item'>
              <img src="./img/seagull.png" alt="" />
            </li>
          </ul>            
        </div>
      </section>
      <section className='whytry'>
        <div className="container">
          <h2 className='whytry-title'>Why try <span className='orange-text'>Rhythm?</span></h2>
          <ul className="whytry-list">
            <li className="whytry-item">
              <div className="whytry-icon-wrapper">
                <svg>
                  <use href='./img/icons.svg#icon-browsing' width="32"></use>
                </svg>
              </div>
              <h3 className='whytry-item-name '>SMOOTH BROWSING</h3>
              <p className='whytry-item-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </li>
            <li className="whytry-item">
              <div className="whytry-icon-wrapper">
                <svg>
                  <use href='./img/icons.svg#icon-delivery' width="32"></use>
                </svg>
              </div>
              <h3 className='whytry-item-name '>EASY DELIVERY </h3>
              <p className='whytry-item-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </li>
            <li className="whytry-item">
              <div className="whytry-icon-wrapper">
              <svg>
                  <use href='./img/icons.svg#icon-payment' width="32"></use>
                </svg>
              </div>
              <h3 className='whytry-item-name '>SWIFT PAYMENTS</h3>
              <p className='whytry-item-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </li>
          </ul>
        </div>
      </section>
      <section className='customers'>
        <div className="container">
          <h2>What our <span className='orange-text'>customer’s</span> say</h2>
          <div className="customers-content">
           <div className="face-orange">
            <div className="wrapper">
                <img src="./img/face.png" alt="" />
              </div>
              <div className="orange-background">              
              </div>
           </div>
           <div className="customers-feedback">
              <p className='customers-opinion'>“The Quality and Delivery is always on time, being a professional guitarist myself I love the customer service the brand provides, highly recommend Rhythm anytime.”              
              </p>
              <p className='customers-name'>Ryan Wels</p>
              <p className='customers-position'>PROFESSIONAL GUITARIST</p>
              <ul className='dots'>
                <li>
                  <div className="dot first"></div>
                </li>
                <li>
                  <div className="dot"></div>
                </li>
                <li>
                  <div className="dot"></div>
                </li>
                <li>
                  <div className="dot"></div>
                </li>
              </ul>
           </div>
          </div>
        </div>
      </section>
      <section className='favorite'>
        <div className="container">
          <h2 className='favorite-title'>Browse and buy your <span className='orange-text'>favorite guitars</span> with Rhythm.    
          </h2>
            <img src="" alt="" />         
            <img src="" alt="" />    
            <img src="" alt="" />         
            <img src="" alt="" />     
            <div className="orange-ellips"></div> 
        </div>
      </section>      
    </main>
    <footer>
      <div className="container">
      <svg className='header-logo'>
          <use href='./img/icons.svg#icon-logo'></use>
      </svg>
        <p className="logo-txt">Rhythm</p>
        <svg className='header-logo'>
          <use href='./img/icons.svg#icon-'></use>
      </svg>
      <p>Enquiry@Rhythm.com</p>
      <svg className='header-logo'>
          <use href='./img/icons.svg#icon-'></use>
      </svg>
      <p>San Francisco</p>
      <h3>PAGES</h3>
      <ul className="footer-list">
        <li className="footer-item"><a href="" className="footer-link"></a></li>
        <li className="footer-item"><a href="" className="footer-link"></a></li>
        <li className="footer-item"><a href="" className="footer-link"></a></li>
      </ul>
      <h3>PRODUCT</h3>
      <ul className="footer-list">
        <li className="footer-item"><a href="" className="footer-link"></a></li>
        <li className="footer-item"><a href="" className="footer-link"></a></li>
        <li className="footer-item"><a href="" className="footer-link"></a></li>
      </ul>
      <h3>FOLLOW US</h3>
      <ul className="footer-media-list">
        <li className="footer-media-item">
          <a href="" className="footer-media-link">
            <svg className="footer-media-svg"></svg>
          </a>
        </li>
        <li className="footer-media-item">
          <a href="" className="footer-media-link">
            <svg className="footer-media-svg"></svg>
          </a>
        </li>
        <li className="footer-media-item">
          <a href="" className="footer-media-link">
            <svg className="footer-media-svg"></svg>
          </a>
        </li>
      </ul>
      <p>© 2022 Copyright.Rhythm</p>
      </div>
    </footer>
    </body>
  </div>;
}

export default App;
