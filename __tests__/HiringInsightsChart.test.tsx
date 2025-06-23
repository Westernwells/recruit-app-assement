import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}
global.ResizeObserver = ResizeObserver as any;

jest.mock('../app/src/hooks/useHiringInsights');
import { useHiringInsights } from '../app/src/hooks/useHiringInsights';
import HiringInsightsChart from '@/app/src/components/dashboard/HiringInsightsChart';
import { HiringInsight } from '@/app/api/hiring-insights/route';
const mockedUseHiringInsights = useHiringInsights as jest.MockedFunction<
  typeof useHiringInsights
>;

jest.mock('../app/src/components/Loader', () => ({
  HiringInsightsLoader: () => <div data-testid="loading-loader" />,
}));

jest.mock('recharts', () => {
  const React = require('react');
  return {
    ResponsiveContainer: ({ children }: any) => <div>{children}</div>,
    LineChart: ({ children }: any) => <div>{children}</div>,
    CartesianGrid: () => <div data-testid="grid" />,
    XAxis: () => <div data-testid="x-axis" />,
    YAxis: () => <div data-testid="y-axis" />,
    Tooltip: () => null,
    Legend: ({ content }: any) => {
      const payload = [
        { value: 'Application to Interview Rate', color: '#10B981' },
        { value: 'Offer Acceptance Rate',     color: '#6366F1' },
        { value: 'Rejection Rate',             color: '#EF4444' },
      ];
      return content({ payload });
    },
    Line: () => null,
  };
});


describe('HiringInsightsChart', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('renders loader while loading', () => {
    mockedUseHiringInsights.mockReturnValue({
      data: undefined,
      error: null,
      isLoading: true,
      isError: false,
      isFetching: true,
      isIdle: false,
      isRefetching: false,
      isFetched: false,
      isFetchedAfterMount: false,
      isLoadingError: false,
      isRefetchError: false,
      status: 'loading',
      failureCount: 0,
      dataUpdatedAt: 0,
      errorUpdatedAt: 0,
      refetch: jest.fn(),
      remove: jest.fn(),
    } as any);

    render(<HiringInsightsChart />);
    expect(screen.getByTestId('loading-loader')).toBeInTheDocument();
  });

  it('renders error message on error', () => {
    mockedUseHiringInsights.mockReturnValue({
      data: undefined,
      error: new Error('fail'),
      isLoading: false,
      isError: true,
      isFetching: false,
      isIdle: false,
      isRefetching: false,
      isFetched: true,
      isFetchedAfterMount: true,
      isLoadingError: false,
      isRefetchError: false,
      status: 'error',
      failureCount: 1,
      dataUpdatedAt: 0,
      errorUpdatedAt: 0,
      refetch: jest.fn(),
      remove: jest.fn(),
    } as any);

    render(<HiringInsightsChart />);
    expect(screen.getByText('Failed to load insights.')).toBeInTheDocument();
  });

  it('renders chart content and legend when data is loaded', () => {
    const sampleData: HiringInsight[] = [
      { num: 1, value1: 10, value2: 20, value3: 30 },
      { num: 2, value1: 40, value2: 50, value3: 60 },
    ];
    mockedUseHiringInsights.mockReturnValue({
      data: sampleData,
      error: null,
      isLoading: false,
      isError: false,
      isFetching: false,
      isIdle: false,
      isRefetching: false,
      isFetched: true,
      isFetchedAfterMount: true,
      isLoadingError: false,
      isRefetchError: false,
      status: 'success',
      failureCount: 0,
      dataUpdatedAt: 0,
      errorUpdatedAt: 0,
      refetch: jest.fn(),
      remove: jest.fn(),
    } as any);

    render(<HiringInsightsChart />);

    expect(screen.getByText('Application to Interview Rate')).toBeInTheDocument();
    expect(screen.getByText('Offer Acceptance Rate')).toBeInTheDocument();
    expect(screen.getByText('Rejection Rate')).toBeInTheDocument();
  });
});