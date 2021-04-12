import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HeaderAppBar from "./components/HeaderAppBar";
import Container from '@material-ui/core/Container';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import CadastrarForm from './components/CadastrarForm'
import PesquisarForm from './components/PesquisarForm'
// import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: '100%',
//     '& > * + *': {
//       marginTop: theme.spacing(2),
//     },
//   },
// }));

function App() {

  // const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [msg, setMsg] = React.useState();
  // function setMensagem(txt){
  //   setOpen(true);
  //   setMsg(txt);
  // }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setMsg();
    setOpen(false);
  };

  return (
    <Router>
      <div className="App">
        <HeaderAppBar />
        <Container maxWidth="lg">
          <Switch>
            <Route path="/cadastrar">
              <CadastrarForm />
            </Route>
            <Route path="/pesquisar">
              <PesquisarForm />
            </Route>
            <Route component={NotFound}></Route>
          </Switch>

          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success">
              {msg}
            </Alert>
          </Snackbar>

        </Container>

      </div>
    </Router>
  );
}

function NotFound() {
  return <h2>Não encontrado</h2>;
}

export default App;
