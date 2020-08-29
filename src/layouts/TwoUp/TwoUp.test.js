import { render } from '@testing-library/react';
import React from 'react';
import TwoUp from './TwoUp';

describe('TwoUp', () => {
    const defaultProps = {};

    it('should render', () => {
        const props = {...defaultProps};
        const { asFragment, queryByText } = render(<TwoUp {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('TwoUp')).toBeTruthy();
    });
});
