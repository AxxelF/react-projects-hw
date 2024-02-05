const Header = () => {
    return (
    <header>
      <img src="./img/logo.png" alt="" width="100" className='logo'/>
      <h1>Handmade Goods Shop</h1>
      <nav>
        <ul className="nav-list">
          <li className="nav-item">
            <p className="nav-text"><a href="">Clothing</a></p>
          </li>
          <li className="nav-item">
            <p className="nav-text"><a href="">Craft</a></p>
          </li>
          <li className="nav-item">
            <p className="nav-text"><a href="">Gifts</a></p>
          </li>
          <li className="nav-item">
            <p className="nav-text"><a href="">Lifestyle</a></p>
          </li>
        </ul>
      </nav>
    </header>
    )
}

    export default Header