import { h, Component, render } from 'https://unpkg.com/preact@10.7.3?module';

// import { useState, useEffect } from 'https://unpkg.com/preact@10.7.3/hooks/dist/hooks.module.js?module'; //FIXME: throws error using this way, use class components instead
import htm from 'https://unpkg.com/htm@3.1.1?module';

// Initialize htm with Preact
const html = htm.bind(h);

export {
    html, Component, render,
};
