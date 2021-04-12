import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Accordion, AccordionSummary, Button, Container, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: 'auto',
        '& .MuiTextField-root': {
            width: '25ch',
        },
    },
    paper: {
        width: 200,
        height: 230,
        overflow: 'auto',
    },
    button: {
        margin: theme.spacing(0.5, 0),
    },
    btns: {
        '& > *': {
            margin: theme.spacing(1)
        },
        display: 'flex'
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
    formControl: {
        // margin: theme.spacing(1),
        textAlign: 'left',
        minWidth: 120,
        justifyContent: "flex-end"
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    container: {
        position: 'absolute',
        left: '50%',
        top: '20%',
        transform: 'translate(-50%, -50%)',
        margin: 'auto',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gridGap: theme.spacing(3),

    },
}));




export default function CadastroForm(props) {
    const classes = useStyles();

    const [value, setValue] = useState();

    const handleChange = (event) => {
        setValue(event.target.value);
    };


    function salvarInformacoes() {
        console.log('salvar informaçpes')
    }
    return (
        <Container maxWidth='lg'>
            <Typography variant="h6" gutterBottom align="left"> Cadastro das Motos</Typography>

            <Grid container spacing={1} >
                <Grid item xs={3}>
                    <TextField
                        autoFocus
                        fullWidth
                        label="Marca"
                        // disabled={disable}
                        name="cnpj"
                        id="cnpj-mask-input"
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={3}>
                    <TextField
                        fullWidth
                        label="Modelo"
                        // disabled={disable}
                        name="cnpj"
                        id="cnpj-mask-input"
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={3}>
                    <TextField
                        fullWidth
                        label="Ano"
                        // disabled={disable}
                        name="cnpj"
                        id="cnpj-mask-input"
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={3}>
                    <TextField
                        fullWidth
                        label="Data para agendamento"
                        // disabled={disable}
                        name="cnpj"
                        id="cnpj-mask-input"
                        variant="outlined"
                    />
                </Grid>

            </Grid>
            <Typography variant="h6" gutterBottom align="left">Dados Cliente</Typography>
            <Grid container spacing={1} >
                <Grid item xs={3}>
                    <TextField
                        fullWidth
                        label="Nome Completo"
                        // disabled={disable}
                        name="cnpj"
                        id="cnpj-mask-input"
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={3}>
                    <TextField
                        fullWidth
                        label="Idade"
                        // disabled={disable}
                        name="cnpj"
                        id="cnpj-mask-input"
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={3}>
                    <TextField
                        fullWidth
                        label="Contato"
                        // disabled={disable}
                        name="cnpj"
                        id="cnpj-mask-input"
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={3}>
                    <TextField
                        fullWidth
                        label="Email"
                        // disabled={disable}
                        name="cnpj"
                        id="cnpj-mask-input"
                        variant="outlined"
                    />
                </Grid>
            </Grid>
            <Grid container justify="flex-end" className={classes.btns} >
                <Button variant="contained" color="primary" onClick={salvarInformacoes} >
                    Casdastrar
                </Button>
            </Grid>
        </Container>
    );
}
