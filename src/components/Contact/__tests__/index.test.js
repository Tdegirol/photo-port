// import React from 'react';
// import { render, cleanup } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';
// import Contact from '..';

// afterEach(cleanup);

// describe('Gallery is rendering', () => {

//     it('renders', () => {
//         render(<Contact currentCategory={portrait} />);
//     });

//     it('matches snapshot', () => {
//         const { asFragment } = render(<Gallery currentCategory={portrait} />)
//         expect(asFragment()).toMatchSnapshot()
//     });

//     it('renders', () => {
//         const { getByTestId } = render(<Gallery currentCategory={portrait} />)
//         expect(getByTestId('h1tag')).toHaveTextContent('Portraits')
//     })
// });