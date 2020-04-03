import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const initialState={
    totlikes:500
}

const mainReducer = (prevState = initialState, action)=>{

    if(action.type === 'Inc_By_One'){
        const count = prevState.totlikes + 1;
        return{...prevState, totlikes: count}
    }else if(action.type === 'Dec_By_One'){
        const count = prevState.totlikes - 1;
        return{...prevState, totlikes: count}
    }else if(action.type === 'Inc_By_Fifty'){
        const count = prevState.totlikes + 50;
        return{...prevState, totlikes: count}
    }else if( action.type === 'Dec_By_Fifty'){
        const count = prevState.totlikes - 50;
        return{...prevState, totlikes: count}
    }

    return{...prevState}

}
const globalstore = createStore(mainReducer);


ReactDOM.render(<Provider store={globalstore}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
