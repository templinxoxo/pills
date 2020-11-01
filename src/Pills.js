import Pill from './Pill';

const Pills = (props) => <div>{props.terms.map(term => <Pill key={term}>{term}</Pill>)}</div>

export default Pills;