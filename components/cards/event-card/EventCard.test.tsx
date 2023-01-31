import { render, screen } from '@testing-library/react';
import { eventsMock } from '../../../lib/data/events.mock';
import { EventCard } from './EventCard';

const event = eventsMock[0];
describe('In Event Card Component', () => {
  beforeEach(() => {
    render(
      <EventCard
        image={event.image}
        short_description={event.short_description}
        title={event.title}
        votes={event.votes}
        url={event.url}
      />
    );
  });

  it('When click on heart should changue state', () => {
    const svgHeart = screen.getByLabelText('like-button');
    expect(svgHeart).toBeInTheDocument();
  });
});
