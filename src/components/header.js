/* eslint-disable no-unused-vars */
/* eslint-disable no-duplicate-case */
/* eslint-disable no-case-declarations */

import React from 'react';
import { Grid, AppBar, CssBaseline, Toolbar, Typography } from '@material-ui/core';
import { Link} from 'react-router-dom';

import { connect } from 'react-redux';


const Header = (props) =>{
    return (
        <>
            <CssBaseline />
            <AppBar position="static" elevation={0} className="MuiAppBar-root">
                <Toolbar className="">
                    <Grid container justify="space-between" alignItems="center">
                        <Typography variant="h4">Our Store</Typography>

                        <Link href="/cart">Cart ({props.cart.count})</Link>

                    </Grid>
                </Toolbar>

            </AppBar>
        </>
    )
}

const mapStateToProps = state => {
    return state;
}


export default connect(mapStateToProps)(Header)
