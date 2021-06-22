import { render, screen } from '@testing-library/react';
import Footer from './components/Footer/Footer.js';
import FirstPage from './components/FirstPage/FirstPage.js'
import Home from './components/Home/Home.js'

test('renders Footer text', () => {
    render(<Footer />);
    expect(screen.getAllByText('JEREMIAS FOLGADO')).toHaveLength(1)
  })
test('renders FirstPage text', () => {
    render(<FirstPage />);
   
    expect(screen.getByRole('div')).toHaveLength(1)
  })
