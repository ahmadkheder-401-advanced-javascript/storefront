/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, Grid } from '@material-ui/core';
import { List, ListItem, ListItemText } from '@material-ui/core';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

import * as actions from '../store/cart';
import * as actionsProduct from '../store/products';


const useStyles = makeStyles((theme) => ({
    '@global': {
        ul: {
            background: '#f5f5f5',
            border: '1px solid #f5f5f5',
            listStyleType: 'none',
            margin: 0,
            padding: '1rem'
        },
    },
    'simpleCart': {
        fontSize: '1.25rem',
        position: 'fixed',
        top: '4.5rem',
        right: '1rem',
        width: '200px',
    }
}));



const Cart = props => {

    useEffect(() => {
        props.getCartAPI();
 // eslint-disable-next-line
    }, []);

    console.log('Props in Cart >>', props);

    const deleteProductsfromCart = (idx, element) => {
        props.removeFromCart(idx);
        props.incrementInStock(element);
    }
    const classes = useStyles();

    return (
        <>
            {props.cartData.cartItem.map((element, idx) => {
                return (
                    <>

                        <Grid className={classes.simpleCart} item xs={4}>
                            <Grid container justify="flex-end">
                                <List>

                                        <ListItem key={idx}>
                                            <ListItemText primary={element.name} />
                                            <IconButton onClick={() => {
                                                // restock(item);

                                                deleteProductsfromCart(idx , element)
                                            }}>
                                                <HighlightOffIcon />
                                            </IconButton>
                                        </ListItem>

                                </List>
                            </Grid>
                        </Grid>


                    </>
                )
            }

            )}

        </>
    )
}


const mapStateToProps = state => ({
    cartData: state.cartData
});


const mapDispatchToProps = (dispatch, getState) => ({
    getCartAPI: () => dispatch(actions.getCartAPI()),
    removeFromCart: (productidx) => dispatch(actions.removeFromCart(productidx)),
    incrementInStock: (product) => dispatch(actionsProduct.incrementInStock(product)),
});



export default connect(mapStateToProps, mapDispatchToProps)(Cart);
