import React, { Component } from 'react';
import { connect } from 'react-redux'

class Beef extends Component {
    renderBeef = () => {
        let beefArray = [];
        for (let index = 0; index < this.props.beefQuantity; index++) {
            let beef = <div key={index} className="beef">
            </div>
            beefArray.push(beef);
        }
        return beefArray;
    }

    render() {
        return (
            <div>
                {this.renderBeef()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        beefQuantity: state.burgerState.burger.beef
    }
}

export default connect(mapStateToProps)(Beef)
