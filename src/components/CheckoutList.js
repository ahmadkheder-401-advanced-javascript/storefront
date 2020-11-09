/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import * as actions from '../store/cart';
import * as actionsProduct from '../store/products';


const useStyles = makeStyles((theme) => ({
  ul1: {
    background: '#fff',
    border: 'none',
    listStyleType: 'none',
    margin: 0,
    padding: '1rem'
  },
  li1: {
    border: 'none!important'
  },
  listHeader: {
    padding: '20px 0px 0 20px',
  }
}));
const CheckoutList = props => {
  const { cartData } = props;
  const classes = useStyles();

  useEffect(() => {
    props.getCartAPI();
  }, []);
  let total = 0;
  let list = [];
  cartData.cartItem.forEach((product) => {
    console.log('product >>', product);
    total += product.total;
    list.push(
      <ListItem className={classes.li1} key={product._id}>
        <ListItemText primary={product.name} />
        <Typography variant='body2'>
          {new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
          }).format(product.price)}{' '}
          x {product.quantity} = {' '}
          <strong>
            {' '}
            {new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
            }).format(product.price * product.quantity)}
          </strong>
        </Typography>
      </ListItem>,
    );
  });

  return (
    <>

        <Typography className={classes.listHeader} variant='h6' align='left' gutterBottom>
          Order summary
                   </Typography>

        <List className={classes.ul1}>
          {list}

          <ListItem className={classes.li1}>

            <ListItemText primary='Total' />

            <Typography variant='subtitle1'>

              <strong>

                {new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'USD',
                }).format(total)}

              </strong>

            </Typography>

          </ListItem>

        </List>
      </>

  )
}
const mapStateToProps = state => ({
  cartData: state.cartData,
  cart: state.cart,

});
const mapDispatchToProps = (dispatch, getState) => ({
  getCartAPI: () => dispatch(actions.getCartAPI()),
  removeFromCart: (productidx) => dispatch(actions.removeFromCart(productidx)),
  incrementInStock: (product) => dispatch(actionsProduct.incrementInStock(product)),
});
export default connect(mapStateToProps, mapDispatchToProps)(CheckoutList);
