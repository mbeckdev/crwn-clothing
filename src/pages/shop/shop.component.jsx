// import React from 'react';

// import SHOP_DATA from './shop.data';

// import CollectionPreview from '../../components/collection-preview/collection-preview.component';

// class ShopPage extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       collections: SHOP_DATA,
//     };
//   }

//   render() {
//     const { collections } = this.state;
//     return (
//       // <div>{collections.map((ah) => console.log(`${ah.id}${ah.title}`))}</div>
//       // <div>
//       //   {collections.map(({ id, title }) => console.log(`${id}${title}`))}
//       // </div>
//       <div>
//         {collections.map(({ id, ...otherCollectionProps }) => (
//           <CollectionPreview key={id} {...otherCollectionProps} />
//         ))}
//       </div>
//     );
//     // return (
//     //   <div>
//     //     {collections.map(({ id, ...otherCollectionProps }) => (
//     //       <CollectionPreview key={id} {...otherCollectionProps} />
//     //     ))}
//     //   </div>
//     // );
//   }
// }

// export default ShopPage;

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// import SHOP_DATA from '../../redux/shop/shop.data.js';

import CollectionPreview from '../../components/collection-preview/collection-preview.component.jsx';

import { selectCollections } from '../../redux/shop/shop.selectors.js';

const ShopPage = ({ collections }) => (
  <div className="shop-page">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

// class ShopPage extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       collections: SHOP_DATA,
//     };
//   }

//   render() {
//     const { collections } = this.state;
//     return (
//       <div className="shop-page">
//         {collections.map(({ id, ...otherCollectionProps }) => (
//           <CollectionPreview key={id} {...otherCollectionProps} />
//         ))}
//       </div>
//     );
//   }
// }

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps)(ShopPage);
