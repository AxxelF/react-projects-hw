const ProductItem = ({img, title, price, freeShipping, isNew, sale, oneFree, isAvailable}) => { 
    return (
        <div className="product-item">
            {isAvailable &&
            <div className="labels">
                {isNew && isAvailable && <span className="is-new">new!</span>}
                {sale && isAvailable && <span className="sale">-{sale}%</span>}                
            </div>
            }            
            {oneFree && isAvailable && <span className="one-free">1+1=3!</span>}
            <div className="product-img-wrap">
            <img src={img} alt="" />
            </div>
            <h3>{title}</h3>
            <p>${price}.99</p>
            {isAvailable ? <button>Buy</button> : <button className='btn-unavailable'>Unavailable</button>}                
            <p className='shipping'>Free Shipping:</p>
            <ul className="shipping-list">
            {freeShipping.map((ship, ind) => {
                return <li className="ship" key={ind}>{ship}</li>
                })}
            </ul>              
        </div>
    )
}

export default ProductItem