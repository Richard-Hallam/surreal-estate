import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import NavBar from '../components/NavBar';


describe("NavBar", () => {
    const { asFragment } = render(<NavBar />);

    it("renders correctly", () => {
        expect(asFragment()).toMatchSnapshot();
    });

});