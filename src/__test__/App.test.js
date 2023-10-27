import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../components/App';


describe("app", () => {
    const { asFragment } = render(<App />);

    it("renders correctly", () => {
        expect(asFragment()).toMatchSnapshot();
    });

    it("renders heading text correctly", () =>{
      render(<App />);
      const linkElement = screen.getByText(/Surreal estate/i);
      expect(linkElement).toBeInTheDocument();
    })
});
