import React from 'react';
import SHOP_DATA from './shoppage.data';

import { CollectionPreview } from './../../components/collection-preview/collection-preview.component'

export default class ShopPage extends React.Component {
  constructor() {
    super();

    this.state = {
      collections: SHOP_DATA
    }
  }

  render() {
    return (<div className='shop-page'>
      {
        this.state.collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))
      }
    </div>)
  }
}