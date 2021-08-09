

import React from 'react';
import { makeStyles } from "@material-ui/core/styles"
import {
  BrowserRouter as Router,
  Switch, Route, Link
} from "react-router-dom";

import {
  Drawer, List, ListItem,
  ListItemIcon, ListItemText,
  Container, Typography,
} from "@material-ui/core";

import HomeIcon from "@material-ui/icons/Home";
import DashboardIcon from '@material-ui/icons/Dashboard';
// import InfoIcon from '@material-ui/icons/Info';
import Home from './components/Home/Home';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import BookIcon from '@material-ui/icons/Book';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import User from './components/User/User';
import Product from './components/Product/Product';

import Blog from './components/Blog/Blog';
import Login from './components/Login/Login';
import NotFount from './components/NotFount/NotFount'
import Dashboard from './components/Dashboard/Dashboard';
// import TodoList from './components/TodoList';
import TodoList from './components/TodoList'

const useStyles = makeStyles((theme) => ({
  drawerPaper: { width: 'inherit' },
  link: {
    textDecoration: 'none',
    color: theme.palette.text.primary
  }
}))

function App() {
  const classes = useStyles();
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Drawer
          style={{ width: '220px' }}
          variant="persistent"
          anchor="left"
          open={true}
          classes={{ paper: classes.drawerPaper }}
        >
          <List>
            {/* <Link to="/" className={classes.link}>
            <ListItem button>
               <ListItemIcon  >
                  <HomeIcon />
                </ListItemIcon>
              
          <ListItemText primary={"Home"}  /> 

              </ListItem>
            </Link> */}
            <Link to="/dashboard" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary={"Dashboard"} />
              </ListItem>
            </Link>
            <Link to="/user" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <PeopleAltIcon />
                </ListItemIcon>
                <ListItemText primary={"User"} />
              </ListItem>
            </Link>
      
          <Link to="/Product" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <ShoppingCartIcon />
                </ListItemIcon>
                <ListItemText primary={"Product"} />
              </ListItem>
            </Link>
  
          </List>
          <Link to="/Blog" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  < BookIcon  />
                </ListItemIcon>
                <ListItemText primary={"Blog"} />
              </ListItem>
            </Link>
      
          <Link to="/Login" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <ExitToAppIcon />
                </ListItemIcon>
                <ListItemText primary={"Login"} />
              </ListItem>
            </Link>
        
              <Link to="/Not-fount" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  < NotInterestedIcon />
                </ListItemIcon>
                <ListItemText primary={"Not-fount"} />
              </ListItem>
            </Link>
   
        </Drawer>
        <Switch>
          <Route exact path="/">
          
      
          </Route>
          <Route  path="/dashboard">
            <Container>
           <Dashboard> </Dashboard>
             
            </Container>
          </Route>
          <Route  path="/user">
            <Container>
              {/* <User> </User> */}
              <TodoList> </TodoList>
            </Container>
          </Route>
          <Route path="/product">
            <Container>
          <Product> </Product>
             
            </Container>
          </Route>
          <Route  path="/blog">
            <Container>
             <Blog> </Blog>
             
            </Container>
          </Route>
          <Route  path="/login">
            <Container>
             <Login> </Login>
             
            </Container>
          </Route>
          <Route  path="/not-fount">
            <Container>
             
             <NotFount>  </NotFount>
            </Container>
            
          </Route>
          <Route  path="/not">
            <Container>
         
            </Container>
            
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

