const ProductsItem = ({
  title,
  price,
  reviews,
  imageUrl,
  discount,
  isSold,
}) => {
  return (
    <div className={isSold ? 'product-item sold' : 'product-item'}>
      <img src={imageUrl} alt='' />
      <h2>{title}</h2>
      <span>Reviews: {reviews}</span>
      <b>${price}.99</b>
      {!isSold && <button>Add to cart</button>}
      {discount && !isSold && <span className='discount'>-{discount}%</span>}
    </div>
  );
};

export default ProductsItem;
