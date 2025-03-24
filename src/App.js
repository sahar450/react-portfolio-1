import React, { Component } from 'react';
import './App.css';
import Header from './header/header'; 
import Lan from './landing/landing';
import Box from './bodytxt/boxtxt';
import Slid from './slider/slider';
import Acardon from './acardon/acardon';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            box: [
                {id: 1, titlebox: "Friendly Support", txtbox: "Our goal is customer satisfaction. For any questions or assistance, contact Theme Junction"},
                {id: 2, titlebox: "Friendly Support", txtbox: "Our goal is customer satisfaction. For any questions or assistance, contact Theme Junction"},
                {id: 3, titlebox: "Friendly Support", txtbox: "Our goal is customer satisfaction. For any questions or assistance, contact Theme Junction"},
                {id: 4, titlebox: "Friendly Support", txtbox: "Our goal is customer satisfaction. For any questions or assistance, contact Theme Junction"},
                {id: 5, titlebox: "Friendly Support", txtbox: "Our goal is customer satisfaction. For any questions or assistance, contact Theme Junction"},
                {id: 6, titlebox: "Friendly Support", txtbox: "Our goal is customer satisfaction. For any questions or assistance, contact Theme Junction"},
            ],
            headerItems: {
                item1: "item1",
                item2: "item2",
                item3: "item3",
                item4: "item4"
            },
            images:[
                { id: 1, src: '/3.jpg', alt: 'Image 1' },
                { id: 2, src: '/4.jpg', alt: 'Image 2' },
                { id: 3, src: '/5.jpg', alt: 'Image 3' }
            ]
        };
    }

    render() {
        return (
            <header>
                <Header {...this.state.headerItems} />
                <Lan />
                <Box>
                    {this.state.box.map((item) => {
                        return (
                            <div className="col-sm-12 col-md-6 col-lg-4" key={item.id}>
                                <div className="boxgroupone">
                                    <h6>{item.titlebox}</h6>
                                    <p>{item.txtbox}</p>
                                </div>
                            </div>
                        );
                    })}
                </Box>
                <Slid images={this.state.images} />
                <Acardon></Acardon>

            </header>
        );
    }
}

export default App;
