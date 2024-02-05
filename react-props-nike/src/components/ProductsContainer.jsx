import ProductsItem from '../ProductsItem';

const ProductsContainer = () => {
  return (
    <div className='products-container'>
      <ProductsItem
        title='Nike Air Force 1 Shadow'
        reviews='5.0'
        price={199}
        imageUrl='https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/4621066a-6e19-49e5-a2d7-4e7e5eade298/buty-air-force-1-shadow-X47QLb.png'
        isSold={false}
      />

      <ProductsItem
        title='Nike Air Force 1 Shadow Bright'
        reviews='4.8'
        price={185}
        imageUrl='https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f67930e0-a953-43b5-9214-86dcef9dad1a/buty-air-force-1-shadow-X47QLb.png'
        discount='15'
        isSold={false}
      />

      <ProductsItem
        title='Nike Air Force 1 Impact'
        reviews='3.9'
        price={167}
        imageUrl='https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/2868bc01-00d1-42a4-9e6e-299727f4787a/buty-dla-duzych-air-force-1-impact-next-nature-j1SpZ5.png'
        discount='25'
        isSold={true}
      />
    </div>
  );
};

export default ProductsContainer;
