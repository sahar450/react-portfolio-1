import React, { Component } from 'react';
import './header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.clickfun = this.clickfun.bind(this);
        this.state={
            isvisit:false,
            name1:'',
        }
        this.funinput=this.funinput.bind(this);
    }
    funinput(event) {
        this.setState({
            name1: event.target.value
            
        },() => {
            console.log("مقدار جدید name1:", this.state.name1);});
        
    }
    
    clickfun() {
        this.setState(prevState => ({
            isvisit: !prevState.isvisit
        }));
    }
    
    
    render() {
        const { item1, item2, item3, item4 } = this.props;
        return (
            <div className='sd'>
                <div className="minbox">
                    <div>
                        <h1>Logo</h1>
                    </div>
                    
                    <div>
                        <ul className="menu">
                            <li><a href="#">{item1}</a></li>
                            <li><a href="#">{item2}</a></li>
                            <li><a href="#">{item3}</a></li>
                            <li><a href="#">{item4}</a></li>
                        </ul>
                        <button className="menu-btn" onClick={this.clickfun}>
                            <i className="fa fa-bars"></i>
                        </button>
                        

                    </div>
                    <input className='searchinpu' value={this.state.name1}  onChange={this.funinput}/>

                    <div className="menures" style={{ display: this.state.isvisit ? 'block' : 'none' }}>
                        <ul >
                            <li><a href="#">{item1}</a></li>
                            <li><a href="#">{item2}</a></li>
                            <li><a href="#">{item3}</a></li>
                            <li><a href="#">{item4}</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
