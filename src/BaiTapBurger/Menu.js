import React, { Component } from 'react';
import { connect } from 'react-redux';
import { renderIngredientAction } from '../redux/actions/BaiTapBurgerAction';
import { RENDER_SALAD, RENDER_CHEESE, RENDER_BEEF } from "../redux/types/BaiTapBurgerType";

class Menu extends Component {
    renderRow = (ingredient, type) => {
        let quantity = this.props[ingredient].toLocaleString();
        let unitPrice = this.props.menu[ingredient].toLocaleString();
        let amount = (quantity * unitPrice).toLocaleString();

        return <tr>
            <td>{ingredient}</td>
            <td>
                <button className="btn btn-success" style={{ width: 38, height: 38 }}
                    onClick={() => { this.props.renderIngredient(type, true) }}>+</button>
                {` ${quantity} `}
                <button className="btn btn-danger" style={{ width: 38, height: 38 }}
                    onClick={() => { this.props.renderIngredient(type, false) }}>-</button>
            </td>
            <td>{unitPrice}</td>
            <td>{amount}</td>
        </tr>
    }

    render() {
        return (
            <div style={{ width: 600 }}>
                <h2 className="text-success">Chọn thức ăn</h2>
                <table className="table text-left" >
                    <thead>
                        <tr>
                            <th>Thức ăn</th>
                            <th></th>
                            <th>Đơn giá</th>
                            <th>Thành tiền</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRow('salad', RENDER_SALAD)}
                        {this.renderRow('cheese', RENDER_CHEESE)}
                        {this.renderRow('beef', RENDER_BEEF)}
                        <tr>
                            <td colSpan={2}></td>
                            <td>Tổng tiền</td>
                            <td>{this.props.totalAmount}</td>
                        </tr>
                    </tbody>
                </table>
                <button className="btn btn-primary float-right mr-5" data-toggle="modal" data-target="#modelId">
                    Thanh toán
                </button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        salad: state.burgerState.burger.salad,
        cheese: state.burgerState.burger.cheese,
        beef: state.burgerState.burger.beef,
        menu: state.burgerState.menu,
        totalAmount: state.burgerState.total
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        renderIngredient: (type, isAdded) => {
            dispatch(renderIngredientAction(type, isAdded))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)
