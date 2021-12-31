import React, { Component } from 'react'
import Beef from './Beef'
import Cheese from './Cheese'
import Salad from './Salad'

export default class Burger extends Component {
    render() {
        return (
            <div>
                <h2 className="text-danger">Bánh burger của bạn</h2>
                <div className="breadTop" />
                <Salad />
                <Cheese />
                <Beef />
                <div className="breadBottom" />
            </div>
        )
    }
}
