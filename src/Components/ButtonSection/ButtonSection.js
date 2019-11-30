import React, { Component } from 'react';
import classes from './ButtonSection.module.css';
import CardButton from '../CardButton/CardButton';

class ButtonSection extends Component {
    render() {
        return(
            <div className={classes.MainContainer}>
                <CardButton label="Count: +1" bgColor="#957DAD" />
                <CardButton label="Count: -1" bgColor="#D291B6" />
                <CardButton label="Count: +50" bgColor="#FEC8D8" />
                <CardButton label="Count: -50" bgColor="#FFDFD3" />
            </div>
        )
    }
}

export default ButtonSection;