import { render, screen } from '@testing-library/react'
import Background from '../background'

test('should render background component', () => {
    render(<Background />);
    const backgroundEle = screen.getByTestId('background-1');
    expect(backgroundEle).toBeInTheDocument();
    expect(backgroundEle.getElementsByClassName('head').length).toBe(1);
    expect(backgroundEle.getElementsByClassName('body-hr').length).toBe(1);
    expect(backgroundEle.getElementsByClassName('body-vt').length).toBe(1);
    expect(backgroundEle.getElementsByClassName('leg').length).toBe(1);
})
