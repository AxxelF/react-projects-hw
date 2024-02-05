import React, { Component } from 'react';

export class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        {
          key: 'all',
          name: 'All Categories',
        },
        {
          key: 'chairs',
          name: 'Chairs',
        },
        {
          key: 'tables',
          name: 'Tables',
        },
        {
          key: 'beds',
          name: 'Beds',
        },
        {
          key: 'light',
          name: 'Light',
        },
        {
          key: 'decor',
          name: 'Decor',
        },
      ],
    };
  }
  render() {
    return (
      <div className='categories'>
        {this.state.categories.map((el) => (
          <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>
            {el.name}
          </div>
        ))}
      </div>
    );
  }
}

export default Categories;
