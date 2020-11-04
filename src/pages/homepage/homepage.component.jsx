import React from 'react';
import './homepage.styles.scss';
import Directory from './../../components/directory/directory.components';

const HomePage = (props) => (
  <div className='homepage'>
    <Directory history={props.history} />
    {/* <h1>Home Page</h1> */}
  </div>
);

export default HomePage;