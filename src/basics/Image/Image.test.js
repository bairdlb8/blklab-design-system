import { render } from '@testing-library/react';
import React from 'react';
import Image from './Image';

describe('Image', () => {
    const defaultProps = {};

    it('should render', () => {
        const props = {...defaultProps};
        const { asFragment, queryByText } = render(<Image {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('Image')).toBeTruthy();
    });
});
