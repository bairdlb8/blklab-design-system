import { render } from '@testing-library/react';
import React from 'react';
import Layout from './Layout';

describe('Layout', () => {
    const defaultProps = {};

    it('should render', () => {
        const props = {...defaultProps};
        const { asFragment, queryByText } = render(<Layout {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('Layout')).toBeTruthy();
    });
});
