import { render } from '@testing-library/react';
import React from 'react';
import Tabs from './Tabs';

describe('Tabs', () => {
    const defaultProps = {};

    it('should render', () => {
        const props = {...defaultProps};
        const { asFragment, queryByText } = render(<Tabs {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('Tabs')).toBeTruthy();
    });
});
