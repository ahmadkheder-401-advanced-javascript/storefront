/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
    },
}));

export default function Links() {
    const classes = useStyles();
    const preventDefault = (event) => event.preventDefault();


    const showCategories = (e) => {
        e.preventDefault();
        //show state

    };
    return (
        <Typography className={classes.root}>
            <Link href="#" onClick={showCategories}>
                Electronices
      </Link>       |

            <Link href="#" onClick={showCategories} variant="body2">
                Food
      </Link>
        </Typography>
    );
}





