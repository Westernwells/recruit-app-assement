import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useToDoItems } from '@/app/src/hooks/useToDoItems';
import { ToDoSection } from '@/app/src/components/dashboard/ToDoSection';

jest.mock('../app/src/hooks/useToDoItems');
const mockedUseToDoItems = useToDoItems as jest.MockedFunction<
  typeof useToDoItems
>;


jest.mock('../app/src/components/Loader', () => ({
  ToDoListLoader: () => <div data-testid="todo-loader" />,
}));

jest.mock(
  '../app/src/lib/getIconForTitle',
  () => ({
    __esModule: true,
    getIconForTitle: (title: string) => <span data-testid="todo-icon">{title}</span>,
  })
);

describe('ToDoSection component', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('renders loader while loading', () => {
    mockedUseToDoItems.mockReturnValue({
      data: undefined,
      isLoading: true,
      isError: false,
    } as any);

    render(<ToDoSection />);
    expect(screen.getByTestId('todo-loader')).toBeInTheDocument();
  });

  it('renders error message on error', () => {
    mockedUseToDoItems.mockReturnValue({
      data: undefined,
      isLoading: false,
      isError: true,
    } as any);

    render(<ToDoSection />);
    expect(screen.getByText('Failed to load To-Do items.')).toBeInTheDocument();
  });

  it('renders a list of InfoCards when data is loaded', () => {
    const sample = [
      {
        id: '1',
        title: 'A Task',
        subtitle: 'Do something',
        iconBg: 'bg-blue-100',
        iconColor: 'text-blue-500',
      },
      {
        id: '2',
        title: 'B Task',
        subtitle: 'Do another thing',
        iconBg: 'bg-green-100',
        iconColor: 'text-green-500',
      },
    ];
    mockedUseToDoItems.mockReturnValue({
      data: sample,
      isLoading: false,
      isError: false,
    } as any);

    render(<ToDoSection />);

    expect(screen.getByRole('heading', { name: 'To-Do List' })).toBeInTheDocument();

    sample.forEach(({ title }) => {
      const titleEl = screen.getByText((content, element) =>
        element?.tagName === 'SPAN' &&
        element?.classList.contains('font-medium') &&
        content === title
      );
      expect(titleEl).toBeInTheDocument();
    });

    sample.forEach(({ subtitle }) => {
      const subEl = screen.getByText((content, element) =>
        element?.tagName === 'P' && content === subtitle
      );
      expect(subEl).toBeInTheDocument();
    });

    const icons = screen.getAllByTestId('todo-icon');
    expect(icons).toHaveLength(sample.length);
    sample.forEach(({ title }, idx) => {
      expect(icons[idx]).toHaveTextContent(title);
    });
  });
});