import { html, Component } from '../deps.js';

export class Counter extends Component {
  state = {
    count: 0,
  }

  render() { // TIP: you can use `(props, state) => {}` too
    const { count } = this.state;
    const { label } = this.props;

    const incrementCounter = () => this.setState({ count: count + 1 });

    return html`
      <h2>${label}</h2>
      <p>Counting: ${count}</p>
      <button onclick="${incrementCounter}">Increment!</button>
    `; 
  }
}
