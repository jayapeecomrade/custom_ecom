import React from 'react';
import MenuItem from './../menu-item/menu-item.component';
import './directory.styles.scss';

export default class Directory extends React.Component {

  constructor() {
    super();
    this.state = {
      sections: [{
        id: 1,
        title: 'HATS',
        imageUrl: 'https://i.ibb.co/cvpntL1/hats.png'
      },
      {
        id: 2,
        title: 'JACKETS',
        imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png'
      },
      {
        id: 3,
        title: 'SNEAKERS',
        imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png'
      },
      {
        id: 4,
        title: 'WOMENS',
        imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
        size: 'large'
      },
      {
        id: 5,
        title: 'MENS',
        imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
        size: 'large'
      }]
    }

  }

  render() {
    return (<div className='directory-menu'>
      {this.state.sections.map(({ title, id, imageUrl, size }) => (
        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
      ))}
    </div>)
  }
}