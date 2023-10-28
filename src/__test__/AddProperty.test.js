import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AddProperty from '../components/AddProperty';


describe("AddProperty", () => {
    const { asFragment } = render(<AddProperty/>);

    it("renders correctly", () => {
        expect(asFragment()).toMatchSnapshot();
    })
});