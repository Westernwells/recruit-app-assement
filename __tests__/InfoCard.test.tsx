import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import InfoCard from '@/app/src/components/dashboard/InfoCard';


describe('InfoCard component', () => {
  it('renders icon, title, subtitle, chevron, applies classes, and handles click', async () => {
    const onClick = jest.fn();
    const TestIcon = () => <span data-testid="custom-icon">Icon</span>;

    render(
      <InfoCard
        icon={<TestIcon />}
        title="Test Title"
        subtitle="Test Subtitle"
        iconBgClass="bg-red-100"
        iconColorClass="text-red-500"
        onClick={onClick}
      />
    );

    // Title and subtitle text are rendered
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Subtitle')).toBeInTheDocument();

    // Custom icon is rendered
    const icon = screen.getByTestId('custom-icon');
    expect(icon).toBeInTheDocument();

    // Icon background wrapper has the correct class
    const iconBgWrapper = icon.closest('div');
    expect(iconBgWrapper).toHaveClass('w-5 h-5 text-red-500');


    // Chevron arrow SVG is present
    expect(document.querySelector('svg')).toBeInTheDocument();

    // Clicking the card invokes onClick
    const card = screen.getByText('Test Title').closest('div');
    await userEvent.click(card!);
    expect(onClick).toHaveBeenCalled();
  });
});