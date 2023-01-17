import { render, screen, fireEvent } from '@testing-library/react'
import Input from '../input';

test('should render Input component', () => {
    render(<Input />);
    const InputEle = screen.getByTestId('inputDiv');
    expect(InputEle).toBeInTheDocument();
    expect(InputEle).toContainHTML('label');
})
