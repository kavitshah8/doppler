'use strict';

import React, {Component} from 'react';
import Rcslider from 'rc-slider';

class DopplerSlider extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let {props} = this;

        return (
            <div>
                <label> Velocity (km/s)
                    <input type="text" readOnly value={props.velocity} />
                </label>
                <Rcslider
                    className="w-250 ml-20 inb"
                    min={-100}
                    max={100}
                    step={1}
                    defaultValue={0}
                    onChange={props.onChange} />
            </div>
        );
    }
}

export default DopplerSlider;
