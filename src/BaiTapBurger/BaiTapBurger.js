import React, { Component } from 'react';
import './BaiTapBurger.css';
import Bill from './Bill';
import Burger from './Burger';
import Menu from './Menu';

export default class BaiTapBurger extends Component {
    render() {
        return (
            <div className="container-fluid">
                <h1 className="text-success">Bài tập burger Cybersoft</h1>
                <div className="row text-center mt-5">
                    <div className="col-6">
                        <Burger />
                    </div>
                    <div className="col-6">
                        <Menu />
                    </div>
                </div>
                <Bill />
            </div>
        )
    }
}
