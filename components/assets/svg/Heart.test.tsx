import { render, screen } from '@testing-library/react';
import { Heart } from './Heart';

describe('When heart component render', () => {
  it('If is active should be fill attr red', () => {
    render(<Heart isActive />);
    const circleHeart = screen.getByLabelText('circle-heart');
    expect(circleHeart).toHaveAttribute('fill', '#FF64BC');
  });
  it('If is inActive should be fill attr gray', () => {
    render(<Heart isActive={false} />);
    const circleHeart = screen.getByLabelText('circle-heart');
    expect(circleHeart).toHaveAttribute('fill', '#D9D9D9');
  });
});
