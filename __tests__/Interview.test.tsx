import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useUpcomingInterviews } from '@/app/src/hooks/useUpcomingInterviews';
import Interview from '@/app/src/components/dashboard/Interview';

jest.mock('../app/src/hooks/useUpcomingInterviews');
const mockedUseUpcomingInterviews = useUpcomingInterviews as jest.MockedFunction<
  typeof useUpcomingInterviews
>;

jest.mock('../app/src/components/Loader', () => ({
  UpcomingInterviewsLoader: () => <div data-testid="interviews-loader" />,
}));

describe('Interview component', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('shows loader while loading', () => {
    mockedUseUpcomingInterviews.mockReturnValue({
      data: undefined,
      isLoading: true,
      isError: false,
    } as any);

    render(<Interview />);
    expect(screen.getByTestId('interviews-loader')).toBeInTheDocument();
  });

  it('shows an error message on error', () => {
    mockedUseUpcomingInterviews.mockReturnValue({
      data: undefined,
      isLoading: false,
      isError: true,
    } as any);

    render(<Interview />);
    expect(screen.getByText('Failed to load interviews.')).toBeInTheDocument();
  });

  it('renders a list of interviews when data is loaded', () => {
    const sample = [
      { time: 'Today, 1 PM', candidate: 'Alice - Dev', type: 'Video Interview' },
      { time: 'Tomorrow, 9 AM', candidate: 'Bob - UX', type: 'On-site Interview' },
    ];
    mockedUseUpcomingInterviews.mockReturnValue({
      data: sample,
      isLoading: false,
      isError: false,
    } as any);

    render(<Interview />);

    expect(screen.getByRole('heading', { name: 'Upcoming Interviews' })).toBeInTheDocument();
    sample.forEach(({ time, candidate, type }) => {
      expect(screen.getByText(time)).toBeInTheDocument();
      expect(screen.getByText(candidate)).toBeInTheDocument();
      expect(screen.getByText(type)).toBeInTheDocument();
    });
  });
});