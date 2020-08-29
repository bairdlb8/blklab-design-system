import { render } from '@testing-library/react';
import React from 'react';
import Hero from './Hero';

describe('Hero', () => {
    const defaultProps = {};

    it('should render', () => {
        const props = {...defaultProps};
        const { asFragment, queryByText } = render(<Hero {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('Hero')).toBeTruthy();
    });
});
