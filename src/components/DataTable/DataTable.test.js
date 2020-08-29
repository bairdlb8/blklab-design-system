import { render } from '@testing-library/react';
import React from 'react';
import DataTable from './DataTable';

describe('DataTable', () => {
    const defaultProps = {};

    it('should render', () => {
        const props = {...defaultProps};
        const { asFragment, queryByText } = render(<DataTable {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('DataTable')).toBeTruthy();
    });
});
