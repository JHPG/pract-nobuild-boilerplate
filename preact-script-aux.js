import { h, Component, render } from 'https://unpkg.com/preact?module';
import htm from 'https://unpkg.com/htm?module';

const html = htm.bind(h);

export const Aa = (props) => html`<h2>${props.text}</h2>`; 
