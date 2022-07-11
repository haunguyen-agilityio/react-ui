import '@testing-library/jest-dom/extend-expect'

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      query: '',
      asPath: '/',
      push: jest.fn(),
    }
  },
}))

jest.spyOn(require('next/router'), 'useRouter')

/**
 * Using
 * useRouter.mockImplementation(() => ({
      route: "/yourRoute",
      pathname: "/yourRoute",
      query: "",
      asPath: "",
    }));
 */
