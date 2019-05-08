// @flow
import React from 'react';
import ReactDOM from 'react-dom';

import '@atlaskit/css-reset';

import { unwrap } from './utils';

function getComponentModule(template: string) {
    /* global require */
    switch (template) {
        case 'user/dashboard/dashboard': return require('./user/dashboard/Dashboard');
        case 'user/dashboard/feeds': return require('./user/dashboard/Dashboard');
        case 'user/dashboard/issues': return require('./user/dashboard/Dashboard');
        default: return require('./NotFound');
    }
}

function render(template: string, data: any) {
    const PageComponent = getComponentModule(template).default;

    ReactDOM.render(
        <PageComponent {...data} />,
        unwrap(document.getElementById('app'))
    );
}

window.render = render;
