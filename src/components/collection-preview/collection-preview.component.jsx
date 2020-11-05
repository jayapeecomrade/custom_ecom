import React from 'react';

import './collection-preview.styles.scss';
import CollectionItem from './../collection-item/collection-item.component';

export const CollectionPreview = (props) => (
  <div className='collection-preview'>
    <h1 className='title'>{props.title.toUpperCase()}</h1>
    <div className='preview'>
      {
        props.items.filter((item, indx) => indx < 4).map(({ id, ...otherItemProps }) => (
          <CollectionItem key={id} {...otherItemProps} />
        ))
      }</div>
  </div>
)