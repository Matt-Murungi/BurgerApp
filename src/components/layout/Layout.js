import React from "react";
import Aux from "../../hoc/Aux";
import BurgerBuilder from "../../containers/BurgerBuilder/BurgerBuilder";
import classes from './Layout.module.css'; 

const layout = (props) => (
  <Aux>
    <div>Toogle, Side Drawer, BackDrop </div>
    <main className={classes.Content}>
     <BurgerBuilder />
    </main>
  </Aux> 
);

export default layout;
