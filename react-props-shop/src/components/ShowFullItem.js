import React, { Component } from 'react';

export class ShowFullItem extends Component {
  render() {
    return (
      <div className='full-item'>
        <div>
          <img
            alt=''
            src={this.props.item.img}
            onClick={() => this.props.onShowItem(this.props.item)}
          />
          <h2>{this.props.item.title}</h2>
          <b>{this.props.item.desc}</b>
          <p>${this.props.item.price}</p>
          <div
            className='add-to-cart'
            onClick={() => this.props.onAdd(this.props.item)}
          >
            Add
          </div>
        </div>
      </div>
    );
  }
}

export default ShowFullItem;
