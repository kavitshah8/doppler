'use strict';

import React, {Component} from 'react';

class DopplerImg extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let {props} = this;
        let degrees = (1 + Math.log(4) * props.velocity);
        return (
            <img src="/assets/img/star-small.png"
                style={{WebkitFilter: 'hue-rotate(-'+ degrees +'deg)'}}
            />
        );
    }
}

export default DopplerImg;
