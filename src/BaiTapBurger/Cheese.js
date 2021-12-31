import React, { Component } from 'react';
import { connect } from 'react-redux'

class Cheese extends Component {
    renderCheese = () => {
        let cheeseArray = [];
        for (let index = 0; index < this.props.cheeseQuantity; index++) {
            let cheese = <div key={index} className="cheese">
            </div>
            cheeseArray.push(cheese);
        }
        return cheeseArray;
    }

    render() {
        return (
            <div>
                {this.renderCheese()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        cheeseQuantity: state.burgerState.burger.cheese
    }
}

export default connect(mapStateToProps)(Cheese)
