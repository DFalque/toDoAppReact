import { render, screen } from "@testing-library/react";
import Column from "./Column";

test("renders column", () => {
  const columnRender = render(<Column />);
  const linkElement = screen.getByText(/Titulo/i);
  expect(linkElement).toBeInTheDocument();
  columnRender.getAllByText("hola colega");
});

// tenemos que hacer un test donde le pase la funcion para
//crear una nueva tarjeta y me la renderice
