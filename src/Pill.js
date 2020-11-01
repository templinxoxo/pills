import React, { Component } from 'react';
import './Pill.css';

class Pill extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headingMode: false,
            className: '',
        }
        this.stateChange = this.stateChange.bind(this);
        this.myRef = React.createRef();
    }

    stateChange () {
        const headingMode = !this.state.headingMode;
        this.setState({
            headingMode,
            className: headingMode  ? 'headingMode' : ''
        });
    }

    render() {
        return (
            <div ref={this.myRef} className={`pill ${this.state.className}`} onClick={this.stateChange}>
                <span className="heading">H</span>
                {this.props.children}
            </div>
        );
    }
}

export default Pill;