import { h, Component, render } from 'https://unpkg.com/preact?module';

import htm from 'https://unpkg.com/htm?module';

const html = htm.bind(h); // Initialize htm with Preact

export {
    html, h, Component, render,
};
