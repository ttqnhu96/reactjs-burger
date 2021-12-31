import React, { Component } from 'react'
import { connect } from 'react-redux'

class Salad extends Component {
    renderSalad = () => {
        let saladArray = [];
        for (let index = 0; index < this.props.saladQuantity; index++) {
            let salad = <div key={index} className="salad">
            </div>
            saladArray.push(salad);
        }
        return saladArray;
    }

    render() {
        return (
            <div>
                {this.renderSalad()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        saladQuantity: state.burgerState.burger.salad
    }
}

export default connect(mapStateToProps)(Salad)