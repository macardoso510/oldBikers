import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
}));

export default function HeaderAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar variant="dense">
                    
                    <Button color="inherit" href="/cadastrar">Cadastrar</Button>
                    <Button color="inherit" href="/pesquisar">Pesquisar</Button>
                   
                </Toolbar>
            </AppBar>
        </div>
    );
}
