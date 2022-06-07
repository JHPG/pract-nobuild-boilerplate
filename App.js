import { html, render } from './deps.js';
import { Aa } from './components/ComponentTest.js';

const app = html`
    <h1>Hello World!</h1>
    <${Aa} text="component works!" />
`;

render(app, document.body);
