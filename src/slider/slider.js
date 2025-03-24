import React, { Component } from 'react';
import './slider.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'font-awesome/css/font-awesome.min.css';

class Slid extends Component {
    constructor(props) {
        super(props);
        this.state={
            count:0
        }
       
    }
    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState(prevState => ({
                count: (prevState.count + 1) % this.props.images.length
            }));
        }, 2000); // تغییر تصویر هر 2 ثانیه
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const { images } = this.props;
        const { count } = this.state;
        return (
            <div className='container'>
                <div className='sliders'>
                    <div><img src={images[count].src} id='images[count].id' width="50%"   /></div>

                 </div>
           </div>
        );
    }
}

export default Slid;
