import React, { Component } from 'react';
import './Pill.css';

class Pill extends Component {
    HEADING_CLASS = 'headingMode';

    constructor(props) {
        super(props);
        this.state = {
            headingMode: false,
        }
        this.toggleHeading = this.toggleHeading.bind(this);
    }

    toggleHeading () {
        const headingMode = !this.state.headingMode;
        this.setState({
            headingMode,
        });
    }

    render() {
        const className = `pill ${this.state.headingMode && this.HEADING_CLASS}`;
        return (
            <>
                { this.props._breakLine ? <br/> : null }
                <div className={className} onClick={this.toggleHeading}>
                    <span className="heading">H</span>
                    {this.props.term}
                </div>
            </>
        );
    }
}

export default Pill;