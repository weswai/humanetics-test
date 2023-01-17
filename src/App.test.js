import { render, screen } from '@testing-library/react'
import App from './App'

test('should render App component', () => {
    render(<App />);
    const appEle = screen.getByTestId('App');
    expect(appEle).toBeInTheDocument();
})