import { render, screen, within } from '@testing-library/react';
import Home from './page';
test('shows all eight curriculum modules and makes the foundation scope explicit', () => {
  render(<Home />);
  expect(
    within(screen.getByRole('list')).getAllByRole('listitem'),
  ).toHaveLength(8);
  expect(screen.getByText(/not implemented yet/)).toBeInTheDocument();
  expect(
    screen.getByRole('link', { name: /Explore the curriculum/ }),
  ).toHaveAttribute('href', '#curriculum');
});
