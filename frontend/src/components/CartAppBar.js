

//rfc --> L'estensione di React permette la scrittura automatica

//Importo gli elementi di Materual UI che mi servono
import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Link from '@material-ui/core/Link';

//importo le icone
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

//importo file creati da me
import "./CartAppBar.css"



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));


export default function CartAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon> </MenuIcon>
                    </IconButton>

                    {/*Titolo dell'applicazione*/ }
                    <Typography variant="h6"> Amazon Clone </Typography>

                    <div className="appbar_search">
                        
                        {/*Icona di ricerca*/ }
                        <div className="search_icon"> 
                            <SearchIcon> </SearchIcon>
                        </div>

                        {/*Barra di ricerca*/ }
                        <InputBase className="search_input">
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        </InputBase>

                    </div>

                    {/*Bottone di Login*/ }
                    <div>
                        <Button color="inherit">Login</Button>
                    </div>
                    
                    {/*Carrello per effettuare acquisti*/ }
                    <div> 
                        <Button color="inherit">  <ShoppingCartOutlinedIcon/>  </Button>
                    </div>

                </Toolbar>

            </AppBar>

            {/* SECONDA TOOLBAR */}
            <Toolbar className="toolbar_category">
                <Link className="toolbar_category_item" href="/categories/1"> Categoria 1</Link>
                <Link className="toolbar_category_item" href="/categories/2"> Categoria 2</Link>
                <Link className="toolbar_category_item" href="/categories/3"> Categoria 3</Link>
            </Toolbar>

            

        </div>
    );
}
