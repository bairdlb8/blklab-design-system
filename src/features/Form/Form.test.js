import { render } from '@testing-library/react';
import React from 'react';
import Form from './Form';

describe('Form', () => {
    const defaultProps = {};

    it('should render', () => {
        const props = {...defaultProps};
        const { asFragment, queryByText } = render(<Form {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('Form')).toBeTruthy();
    });
});
