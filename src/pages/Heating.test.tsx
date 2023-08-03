import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Heating from './Heating';
import { BrowserRouter } from 'react-router-dom';

describe('Heating', () => {
  test('renders properly', () => {
    render(<Heating />, { wrapper: BrowserRouter });
    expect(screen.getByText(/Heating/i)).toBeDefined();
  });
});
