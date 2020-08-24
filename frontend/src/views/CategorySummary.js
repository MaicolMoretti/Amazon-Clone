import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import CartCard from '../components/CartCard';
import { Grid } from '@material-ui/core';


export default function CategorySummary() {

    const [featuredProducts, setFeatureProducts] = useState([])
    const category = useParams("cat");
    console.log("category = ", category);

    useEffect(() => {
        setFeatureProducts([{
            id: 1,
            name: "Computer da Gaming",
            description: "Case : Noua Smash S3 Black 0.50MM SPCC 3*USB3.0/2.0 4*Fan Dual Halo Rgb Rainbow Addressable Front & Side Glass ( Ventole RGB, con la possibilità di scegliere il colore tramite il telecomando in dotazione.) / Scheda Madre: Gigabyte H310M / ALIMENTATORE 80+PLUS 500 WATT. Processore : Intel Core i5-9400 6-CORE ",
            price: 989.99
        }, {
            id: 2,
            name: "Iphone Xs 128 Gb",
            description: "Apple iPhone XS è un smartphone iOS di buon livello, fortemente votato all'imaging, in grado di soddisfare anche l'utente più esigente. Dispone di un enorme display Touchscreen da 5.8 pollici con una risoluzione di 2436x1125 pixel.",
            price: 1099.99
        }, {
            id: 3,
            name: "Cuffie sovrauricolari Bluetooth wireless con auricolari, audio personalizzato",
            description: "Suono personalizzato: l’unica cuffia al mondo che impara e si adatta automaticamente al modo in cui ascolti la musica. Cancellazione attiva del rumore + Modalità Social: goditi un ambiente di ascolto incredibilmente silenzioso o percepisci le conversazioni e i rumori ambientali al tocco di un pulsante.",
            price: 300.00
        }, {
            id: 4,
            name: "Lamicall Supporto Tablet, Supporto Regolabile",
            description: "Il vantaggio di Lamicall:  baricentro basso. Angolo di visione multi-sfaccettato, angolazione facilmente regolabile, si adatta a diverse condizioni. Compatibilità: Compatibile con dispositivi di 5-11 pollici, come ad esempio iPad Pro, iPad Air, Surface Pro, Samsung Tablet e altri dispositivi, anche con la sua custodia.",
            price: 17.84
        }
        ])
    }, []);

    const featuredProductsF = featuredProducts.map(product => {
        return (
            <Grid item xs>
                <CartCard
                    key={product.id}
                    title={product.name}
                    actionTitle="dettagli"
                    actionLink={"/product/" + product.id}>

                    <p> {product.description} </p>

                </CartCard>
            </Grid>
        )

    })

    /*Per mettere i prodotti ordinati nella pagina (crea una griglia di quadrati)*/
    return (
        <div>
            <Grid container spacing={3}>
                {featuredProductsF}
            </Grid>
        </div>
    )
}
