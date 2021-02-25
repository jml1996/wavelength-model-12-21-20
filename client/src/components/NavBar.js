import React, { useContext, useEffect, useState } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { ThemeProvider, withStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";
import { border, palette } from '@material-ui/system';

import { CartContext } from './../contexts/CartContext';

const NavBar = (props) => {
    const { cart } = useContext(CartContext);
    const [itemsCardinality, setItemsCardinality] = useState(0)
    console.log(itemsCardinality)

    const itemCount = (crt) => {
        const totalNumber = Object.values(crt).reduce((a, b) => a + b)
        console.log(totalNumber)
        setItemsCardinality(totalNumber)
    }

    useEffect(() => {
        itemCount(cart)
    }, [cart])

    return(
        <AppBar className="nav-bar" display="flex" position="static">
            <Toolbar>
                <Grid justify="space-around" container spacing={24}>
                    <Grid item style={{width: "12%"}}>
                        <Link to="/" color="inherit">
                            Bulb Identifier
                        </Link>
                    </Grid>
                    <Grid item style={{width: "12%"}}>
                        <a target="_blank" rel="noreferrer" href="https://www.wavelengthlighting.com/blog/2020/10/8/when-data-science-meets-lighting-how-wavelength-built-bulb-detection">
                            About
                        </a>
                    </Grid>
                    <Grid item style={{width: "12%"}}>
                        <Link to="/checkout" color="inherit">
                            Cart<span id="cart-num">{itemsCardinality}</span>
                        </Link>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}
export default NavBar;