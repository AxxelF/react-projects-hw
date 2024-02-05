import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Items from './components/Items';
import Categories from './components/Categories';
import ShowFullItem from './components/ShowFullItem';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: '001',
          title: 'Minimalist Oversized Wall Clock',
          price: '122',
          img: 'https://i.etsystatic.com/32103038/c/3000/2384/0/25/il/f675f9/4112986983/il_340x270.4112986983_54ec.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
          category: 'decor',
        },
        {
          id: '002',
          title: 'Scandinavian Style Lamp',
          price: '88',
          img: 'https://i.etsystatic.com/6669092/r/il/f9bdd6/4933537264/il_340x270.4933537264_mnvf.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
          category: 'light',
        },
        {
          id: '003',
          title: 'Wood Wall Art',
          price: '550',
          img: 'https://i.etsystatic.com/9542764/r/il/e30ebe/5186011922/il_794xN.5186011922_ppq0.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
          category: 'decor',
        },
        {
          id: '004',
          title: 'Geometrical Octagon Mirror',
          price: '59',
          img: 'https://i.etsystatic.com/48360352/c/960/762/0/337/il/0202cd/5699332740/il_340x270.5699332740_8tma.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
          category: 'decor',
        },
        {
          id: '005',
          title: 'Coffee Table on Wheels',
          price: '220',
          img: 'https://i.etsystatic.com/39359786/r/il/87fefe/4677991767/il_340x270.4677991767_jcq7.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
          category: 'tables',
        },
        {
          id: '006',
          title: 'Platform Bed',
          price: '770',
          img: 'https://i.etsystatic.com/24578300/c/1739/1382/118/520/il/4685f0/5748931297/il_340x270.5748931297_jnw9.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
          category: 'beds',
        },
        {
          id: '007',
          title: 'Dressing Table with Lighted Mirror',
          price: '300',
          img: 'https://i.etsystatic.com/12552261/r/il/57921f/5665893194/il_340x270.5665893194_q9tx.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
          category: 'tables',
        },
        {
          id: '008',
          title: 'Epoxy Olive Table',
          price: '1200',
          img: 'https://i.etsystatic.com/26602043/c/2250/1788/0/669/il/2683b4/4898876997/il_340x270.4898876997_mh8v.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
          category: 'tables',
        },
        {
          id: '009',
          title: 'Dining Chair',
          price: '63',
          img: 'https://i.etsystatic.com/21498550/r/il/d2e356/4927271205/il_340x270.4927271205_7kqp.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
          category: 'chairs',
        },
        {
          id: '010',
          title: 'Invisible Floating Bookshelf',
          price: '29',
          img: 'https://i.etsystatic.com/18035051/r/il/c44ac7/1596075409/il_340x270.1596075409_p8yv.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
          category: 'decor',
        },
        {
          id: '011',
          title: 'Bean Bag Cover',
          price: '250',
          img: 'https://i.etsystatic.com/23798158/r/il/5a5013/5153826570/il_340x270.5153826570_5liy.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
          category: 'chairs',
        },
        {
          id: '012',
          title: 'Vintage Armchair (baroque)',
          price: '1800',
          img: 'https://i.etsystatic.com/14484193/r/il/97600a/5729525407/il_340x270.5729525407_24h7.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
          category: 'chairs',
        },
        {
          id: '013',
          title: 'Wooden Fruit Boxes',
          price: '98',
          img: 'https://i.etsystatic.com/40032257/r/il/7ada7f/4508974738/il_340x270.4508974738_2iyz.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
          category: 'decor',
        },
      ],
      showFullItem: false,
      fullItem: {},
    };
    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
  }
  render() {
    return (
      <div className='wrapper'>
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items
          onShowItem={this.onShowItem}
          items={this.state.currentItems}
          onAdd={this.addToOrder}
        />
        {this.state.showFullItem && (
          <ShowFullItem
            onAdd={this.addToOrder}
            onShowItem={this.onShowItem}
            item={this.state.fullItem}
          />
        )}
        <Footer />
      </div>
    );
  }

  onShowItem(item) {
    this.setState({ fullItem: item });
    this.setState({ showFullItem: !this.state.showFullItem });
  }

  chooseCategory(category) {
    if (category === 'all') {
      this.setState({ currentItems: this.state.items });
      return;
    }
    this.setState({
      currentItems: this.state.items.filter((el) => el.category === category),
    });
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter((el) => el.id !== id) });
  }

  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach((el) => {
      if (el.id === item.id) isInArray = true;
    });
    if (!isInArray) this.setState({ orders: [...this.state.orders, item] });
  }
}

export default App;
