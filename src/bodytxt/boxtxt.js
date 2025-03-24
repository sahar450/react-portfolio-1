import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './boxtxt.css';

class Box extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { children } = this.props; // بچه‌ها رو از props دریافت می‌کنیم
        return (
            <div className="container">
                <div className="row">
                    {children} {/* اینجا بچه‌ها رو رندر می‌کنیم */}
                </div>
            </div>
        );
    }
}

export default Box;
