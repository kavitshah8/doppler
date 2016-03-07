'use strict';

import React, {Component} from 'react';

import DopplerImg from './DopplerImg.jsx';
import DopplerSlider from './DopplerSlider.jsx';

class Doppler extends Component {

    constructor(props) {
        super(props);
        this.state = {
            velocity: 0.0
        };
        this.onRangeChange = this.onRangeChange.bind(this);
    }

    onRangeChange(value) {
        this.setState({
            velocity: value
        });
    }

    render () {
        let {state} = this;

        return (
            <div className="mw-800 my-0 mx-auto">
                <DopplerImg velocity={state.velocity} />
                <DopplerSlider velocity={state.velocity} onChange={this.onRangeChange}/>
            </div>
        );
    }
}

export default Doppler;
