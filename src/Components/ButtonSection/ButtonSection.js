import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './ButtonSection.module.css';
import CardButton from '../CardButton/CardButton';

class ButtonSection extends Component {
    render() {
        return(
            <div className={classes.MainContainer}>
                <CardButton btnClick={this.props.onIncLikeByOne} label="Count: +1" bgColor="#957DAD" />
                <CardButton btnClick={this.props.onDecLikeByOne} label="Count: -1" bgColor="#D291B6" />
                <CardButton btnClick={this.props.onIncLikeByFifty} label="Count: +50" bgColor="#FEC8D8" />
                <CardButton btnClick={this.props.onDecLikesByFifty} label="Count: -50" bgColor="#FFDFD3" />
            </div>
        )
    }
}

const dispatchAvailble = (dispatch)=>{
    return{
        onIncLikeByOne : ()=> dispatch({type: 'Inc_By_One'}),
        onDecLikeByOne : ()=> dispatch({type: 'Dec_By_One'}),
        onIncLikeByFifty : ()=> dispatch({type : 'Inc_By_Fifty'}),
        onDecLikesByFifty : ()=> dispatch({type: 'Dec_By_Fifty'})
        
    }
}



export default connect(null,dispatchAvailble)(ButtonSection) ;