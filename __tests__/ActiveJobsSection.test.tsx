import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useActiveJobs } from '@/app/src/hooks/useActiveJobs';
import { ActiveJobsSection } from '@/app/src/components/dashboard/ActiveJobs';

jest.mock('../app/src/hooks/useActiveJobs');
jest.mock('../app/src/components/Loader', () => ({
  ActiveJobsLoader: () => <div data-testid="active-jobs-loader" />,
}));

const mockedUseActiveJobs = useActiveJobs as jest.MockedFunction<
  typeof useActiveJobs
>;

describe('ActiveJobsSection', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('renders loader while loading', () => {
    mockedUseActiveJobs.mockReturnValue({
      data: undefined,
      isLoading: true,
      isError: false,
    } as any);

    render(<ActiveJobsSection />);
    expect(screen.getByTestId('active-jobs-loader')).toBeInTheDocument();
  });

  it('renders error message on error', () => {
    mockedUseActiveJobs.mockReturnValue({
      data: undefined,
      isLoading: false,
      isError: true,
    } as any);

    render(<ActiveJobsSection />);
    expect(
      screen.getByText('Failed to load Active Jobs.')
    ).toBeInTheDocument();
  });

  it('renders a list of jobs when data is loaded', () => {
    const sampleJobs = [
      {
        id: 'job-1',
        title: 'Senior Frontend Developer',
        candidates: 32,
        inPipeline: 8,
        daysOpen: 12,
        progress: 75,
      },
      {
        id: 'job-2',
        title: 'Product Manager',
        candidates: 28,
        inPipeline: 5,
        daysOpen: 8,
        progress: 50,
      },
    ];

    mockedUseActiveJobs.mockReturnValue({
      data: sampleJobs,
      isLoading: false,
      isError: false,
    } as any);

    render(<ActiveJobsSection />);

    expect(
      screen.getByText('Senior Frontend Developer')
    ).toBeInTheDocument();
    expect(screen.getByText('Product Manager')).toBeInTheDocument();

    expect(
      screen.getByText('32 candidates — 8 in pipeline')
    ).toBeInTheDocument();
    expect(
      screen.getByText('28 candidates — 5 in pipeline')
    ).toBeInTheDocument();
  });
});