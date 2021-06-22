import { render, screen } from '@testing-library/react';
import Footer from './components/Footer/Footer.js';


test('renders Footer text', () => {
    render(<Footer />);
    expect(screen.getAllByText('JEREMIAS FOLGADO')).toHaveLength(1)
  })
test('renders Footer text', () => {
    render(<Footer />);
    expect(screen.getAllByText('Created by')).toHaveLength(1)
  })
test('renders Footer text', () => {
    render(<Footer />);
    expect(screen.getAllByText('as a Personal Project for Henry BT')).toHaveLength(1)
  })
