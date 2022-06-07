import { html, render } from './deps.js';
import { Counter } from './components/Counter.js';

const app = html`
    <h1>Hello!</h1>
    <${Counter} label="The counter works!" />
`;

render(app, document.body);
