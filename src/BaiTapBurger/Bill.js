import React, { Component } from 'react';
import { connect } from 'react-redux'

class Bill extends Component {
    renderRow = (ingredient) => {
        let quantity = this.props.billState.burger[ingredient].toLocaleString();
        let unitPrice = this.props.billState.menu[ingredient].toLocaleString();
        let amount = (quantity * unitPrice).toLocaleString();

        return <tr className="table-bordered">
            <td>{ingredient}</td>
            <td>{quantity}</td>
            <td>{unitPrice}</td>
            <td>{amount}</td>
        </tr>
    }

    render() {
        return (
            <div>
                <div>
                    <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Bill</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <table className="table text-left border" >
                                        <thead className="table-bordered">
                                            <tr>
                                                <th>Thức ăn</th>
                                                <th>Số lượng</th>
                                                <th>Đơn giá</th>
                                                <th>Thành tiền</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.renderRow('salad')}
                                            {this.renderRow('cheese')}
                                            {this.renderRow('beef')}
                                            <tr>
                                                <td colSpan={2}></td>
                                                <td>Tổng tiền</td>
                                                <td>{this.props.billState.total}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">OK</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        billState: state.burgerState
    }
}

export default connect(mapStateToProps)(Bill)
