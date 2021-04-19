import { render, screen } from "@testing-library/react";
import Card from "./Card";

test("renders Card", () => {
  render(<Card />);
  const linkElement = screen.getByText("hola amigos");
  expect(linkElement).toBeInTheDocument();
});
