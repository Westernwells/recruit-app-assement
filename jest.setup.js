// jest.setup.js
// import "@testing-library/jest-dom/extend-expect";
import '@testing-library/jest-dom';
// any global mocks or extensions:
jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
  }),
}));