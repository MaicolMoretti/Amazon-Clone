import React from 'react';
import "./CardPageRow.css";
import CartCard from "../components/CartCard";
import { Grid } from '@material-ui/core';
import "./CardPageRow.css";


export default function CardPageRow() {
    return (
        /*Prima riga di quadratoni nel body */
        <div id="GrigliaPrimaRiga">
            <Grid container spacing={3}>
                <Grid item xs>
                    <CartCard title="Offerte abbigliamento donna" actionTitle="informazioni" actionLink="More info">  
                       Descrizione 1
                    </CartCard>
                </Grid>

                <Grid item xs>
                    <CartCard title="Offerte per moda uomo" actionTitle="Più info"> Descrizione 2 </CartCard>
                </Grid>

                <Grid item xs>
                    <CartCard title="Gli stili uomo più amati" actionTitle="Espandi"> Descrizione 3 </CartCard>
                </Grid>
            </Grid>
        </div>
        
    )
}
