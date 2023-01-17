import { render, screen } from '@testing-library/react'
import Dot from '../dot'

test('should render Dot component', () => {
    render(<Dot />);
    const dotEle = screen.getByTestId('dotDiv');
    expect(dotEle).toBeInTheDocument();
    expect(dotEle).toContainHTML('sup');
    expect(dotEle.getElementsByClassName('dot-style').length).toBe(1);
})

test('should render Dot component with props', () => {
    render(<Dot colorCode={`wh`} dotId={`12345`} />);
    const dotEle = screen.getByTestId('dotDiv');
    expect(dotEle.getElementsByClassName('wh').length).toBe(1);
    expect(dotEle.getElementsByTagName('sup')[0].textContent).toBe('12345');
})
