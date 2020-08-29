import { render } from '@testing-library/react';
import React from 'react';
import Checkbox from './Checkbox';

describe('Checkbox', () => {
    const defaultProps = {};

    it('should render', () => {
        const props = {...defaultProps};
        const { asFragment, queryByText } = render(<Checkbox {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('Checkbox')).toBeTruthy();
    });
});
