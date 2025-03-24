import React, { Component } from 'react';
import './acardon.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

class Acardon extends Component {
    constructor(props) {
        super(props);
        this.btnacardon = this.btnacardon.bind(this);
        this.state = {
            clickbtns: {
                btn1: false,
                btn2: false,
                btn3: false,
            },
        };
    }

    btnacardon(id) {
        this.setState(prevState => ({
            clickbtns: {
                ...prevState.clickbtns,
                [id]: !prevState.clickbtns[id], // تغییر وضعیت دکمه با استفاده از id
            }
        }));
    }

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-12 col-md-12 col-lg-12'>
                        <div>
                            <button onClick={() => this.btnacardon('btn1')}>  click me  </button>
                            <div className='txtboxone' style={{ display: this.state.clickbtns.btn1 ? 'block' : 'none' }}>
                                <p>Our goal is customer satisfaction. For any questions or assistance, contact Theme Junction</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-12 col-md-12 col-lg-12'>
                        <div>
                            <button onClick={() => this.btnacardon('btn2')}>  click me   </button>
                            <div className='txtboxone' style={{ display: this.state.clickbtns.btn2 ? 'block' : 'none' }}>
                                <p>Our goal is customer satisfaction. For any questions or assistance, contact Theme Junction</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-12 col-md-12 col-lg-12'>
                        <div>
                            <button onClick={() => this.btnacardon('btn3')}>click me</button>
                            <div className='txtboxone' style={{ display: this.state.clickbtns.btn3 ? 'block' : 'none' }}>
                                <p>Our goal is customer satisfaction. For any questions or assistance, contact Theme Junction</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Acardon;
