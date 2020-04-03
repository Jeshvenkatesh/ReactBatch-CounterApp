import React from 'react';
import { connect } from 'react-redux';
import classes from './Sidebar.module.css';

const Sidebar = (props) => {
    return(
        <div className={classes.Sidebar}>
            <h1>Total Count: <br></br><span>{props.updatedVal}</span></h1>
        </div>
    );
}

const getValsfromGlobalStore = (globalstore)=>{

    return{
         updatedVal : globalstore.totlikes
    }

}

export default connect(getValsfromGlobalStore)(Sidebar) ;
