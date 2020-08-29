import { render } from '@testing-library/react';
import React from 'react';
import Toast from './Toast';

describe('Toast', () => {
    const defaultProps = {};

    it('should render', () => {
        const props = {...defaultProps};
        const { asFragment, queryByText } = render(<Toast {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('Toast')).toBeTruthy();
    });
});
