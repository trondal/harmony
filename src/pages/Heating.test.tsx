import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Heating } from './Heating';

describe('Heating', () => {
  test('renders properly', () => {
    render(<Heating />, { wrapper: BrowserRouter });
    expect(screen.getByText(/heating/i)).toBeDefined();
  });
});
