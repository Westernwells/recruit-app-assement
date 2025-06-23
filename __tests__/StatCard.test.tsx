import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { StatItem } from '@/app/api/stats/route';
import { StatCard } from '@/app/src/components/dashboard/StatCard';

describe('StatCard component', () => {
  it('renders title and value', () => {
    const stat: StatItem = {
      id: 'test-stat',
      title: 'Test Title',
      value: '123',
      change: null,
      label: 'No change',
    };

    render(<StatCard stat={stat} />);

    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('123')).toBeInTheDocument();
    expect(screen.getByText('No change')).toBeInTheDocument();
  });

  it('renders an up arrow and green text for upward change', () => {
    const stat: StatItem = {
      id: 'up-stat',
      title: 'Upward',
      value: '200',
      change: { amount: 10, direction: 'up', label: 'more', color: 'green' },
    };

    render(<StatCard stat={stat} />);

    expect(screen.getByText('10 more')).toBeInTheDocument();
    expect(screen.getByText('than last month')).toBeInTheDocument();
    const changeSpan = screen.getByText('10 more').closest('span');
    expect(changeSpan).toHaveClass('text-green-500', 'flex', 'items-center');
    const svg = changeSpan?.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });

  it('renders a down arrow and red text for downward change', () => {
    const stat: StatItem = {
      id: 'down-stat',
      title: 'Downward',
      value: '50',
      change: { amount: 5, direction: 'down', label: 'fewer', color: 'red' },
    };

    render(<StatCard stat={stat} />);

    expect(screen.getByText('5 fewer')).toBeInTheDocument();
    expect(screen.getByText('than last month')).toBeInTheDocument();
    const changeSpan = screen.getByText('5 fewer').closest('span');
    expect(changeSpan).toHaveClass('text-red-500');
    const svg = changeSpan?.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });
});