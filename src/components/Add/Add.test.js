import { render, screen } from "@testing-library/react";
import Add from "./Add";

test("renders Add", () => {
  const addComponent = render(<Add />);
  //const linkElement = screen.getByText("Add");
  //console.log(linkElement);
  addComponent.getAllByText("Close");
});
