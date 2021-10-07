import React from 'react';
import { mount } from '@shopify/react-testing';
import { I18nContext, I18nManager } from '@shopify/react-i18n';

import { App } from '../App';

describe('<App />', () => {
    const i18nManager = new I18nManager({ locale: 'fr' });

    it('This works.', () => {
        // Stops React import declaration from being dropped
        const notused = React.version;
        
        const wrapper = mount(<I18nContext.Provider value={i18nManager}><App /></I18nContext.Provider>);
        expect(wrapper.html()).toBe("<h1>hello</h1>");
    });
});