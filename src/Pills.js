import React, { Component } from 'react';
import Pill from './Pill';

class Pills extends Component {
    constructor(props) {
        super(props);
        const pills = props.terms
            .map(( term, key ) => Object.assign({ term, key }))
        this.state = {
            pills
        }
        this.wrapperComponent = React.createRef();
    }
    componentDidMount() {
        window.addEventListener('resize', this.updateComponent.bind(this));
        this.updateComponent();
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateComponent.bind(this));
    }

    updateComponent () {
        const {current} = this.wrapperComponent;
        if (current) {
            const {clientWidth} = current,
                margins = 10, //pill margins size
                heading = 20; //heading size
            let currentLineSize = 0,
                breakLineIndexes = [];

            Array.from(current.querySelectorAll('.pill'))
                .forEach(( child, i ) => {
                    const isHeadingMode = child.className.includes('headingMode'),
                        buffer = margins + (!isHeadingMode && heading),
                        pillSize = child.offsetWidth + buffer;
                    currentLineSize += pillSize;
                    
                    if (currentLineSize > clientWidth) {
                        currentLineSize = pillSize;
                        breakLineIndexes.push(i)
                    }
                })
                
            const pills = this.state.pills
                .map((pill, i) => Object.assign(
                    pill, 
                    {_breakLine: breakLineIndexes.includes(i)}
                )),
                state = Object.assign(this.state, { pills });
                
            this.setState(state);
        }
    }

    render() {
        return (
            <div ref={this.wrapperComponent}>
                { this.state.pills.map(pill => <Pill {...pill} />) }
            </div>
        )
    }
}
export default Pills;