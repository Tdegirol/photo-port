import React from "react";
import About from '..';
import { render, cleanup } from '@testing-library/react';

afterEach(cleanup);

describe('About component', () => {
    //First Test
    it('renders', () => {
        render(<About />);
    });

    //Second Test
    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render (<About />);
        expect(asFragment()).toMatchSnapshot();
    })

})
