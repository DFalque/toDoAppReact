import { render, screen } from "@testing-library/react";
import Column from "./Column";

test("renders column", () => {
  render(<Column />);
  const linkElement = screen.getByText(/Titulo/i);
  expect(linkElement).toBeInTheDocument();
});
