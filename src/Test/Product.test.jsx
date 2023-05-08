import * as React from "react";
import axios from "axios";
import "@testing-library/jest-dom";
import { JSDOM } from "jsdom";

const jsdom = new JSDOM("<!doctype html><html><body></body></html>");

global.window = jsdom.window;
global.document = window.document;
global.navigator = {
  userAgent: "node.js",
};

// import { BrowserRouter as Router, Routes } from "react-router-dom";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
//import {render,screen,cleanup,fireEvent} from '@testing-library/react';
//import { tab } from "@testing-library/user-event";
//import renderer from "react-test-renderer";
//import ShowAllProducts from "../screens/products/showallproducts/ShowAllProducts";
//import Routess from "../Router";
//import { deleteProduct } from '../service/ProductService';
import ProductDisplay from '../Admin/Product/ProductDisplay'
import router from '../router/router'

jest.mock("axios");

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

test("renders the Table ", () => {
  render(<ProductDisplay />);
  const table = screen.getByText(/Products/);
  expect(table).toBeInTheDocument();
});

test("renders without crashing", () => {
  render(<ProductDisplay />);
});

// test('render without crashing',() =>{
// const div = document.createElement('div');
//   ReactDOM.render(<ShowAllProducts />, div);
// });

// sanity check
// test("one is one", () => {
//   expect(1).toEqual(1);
// });

const fakeData = [
  {
    _id: "1",
    image: "http://example.com/image1.jpg",
    Name: "Product 1",
    Description: "Description 1",
    Price: 10,
    Quantity: 20,
    category: { CategoryName: "Category 1" },
    brand: { BrandName: "Brand 1" },
  },
];

test("renders the component with the correct elements", async () => {
  axios.get.mockResolvedValueOnce({ data: fakeData });
  render(<router />);
  render(<ProductDisplay />);

  expect(screen.getByText("Show all products")).toBeInTheDocument();
  expect(screen.getByText("Create Product")).toBeInTheDocument();
  expect(screen.getByText("Product Image")).toBeInTheDocument();
  expect(screen.getByText("Product Name")).toBeInTheDocument();
  expect(screen.getByText("Product Description")).toBeInTheDocument();
  expect(screen.getByText("Product Price")).toBeInTheDocument();
  expect(screen.getByText("Product in stock")).toBeInTheDocument();
  expect(screen.getByText("Category Name")).toBeInTheDocument();
  expect(screen.getByText("Brand Name")).toBeInTheDocument();
  expect(screen.getByText("Action")).toBeInTheDocument();
});

// test('check if the Delete Update,Product IDs,Product Names,Edit,Delete is present or not', () => {
//     render(<ShowAllProducts />);
//     const table = screen.getByTestId('Show all products');
//     // expect(table).toHaveTextContent('Delete','Update','Product IDs','Product Names','Edit','Delete');
//     expect(table).toHaveTextContent('Sr No','Product Image','Product Name','Product Description','Product Price','Product Price','Product in stock','Category Name','Brand Name','Action')
// });

test("Checks if the HTML Table tag is present or not ", () => {
  render(<ProductDisplay />);
  const table = screen.getByTestId("Show all products");
  expect(table).toContainHTML("</table>");
});

// test('Should Matches snapshort', () => {
//   const products = [{ _id: 1, product_name: 'samsung' }];
//   const tree = renderer
//     .create(
//       <BrowserRouter>
//         <ShowAllProducts Products={products} />
//       </BrowserRouter>
//     )
//     .toJSON();
//   expect(tree).toMatchSnapshot();
// });

//comments
// jest.mock('../service/ProductService', () => ({
//     deleteProduct: npm ls
jest.fn(),
//   }));

// describe('ShowAllProducts component', () => {
//     const mockProducts = [
//       { _id: 1, product_name: 'Product 1' },
//       { _id: 2, product_name: 'Product 2' },
//     ];

//     test('should call onDeleteClick when the Delete button is clicked', async () => {
//       const setProducts = jest.fn();
//       const { getByTestId } = render(
//         <BrowserRouter>
//           <ShowAllProducts Products={mockProducts} setProducts={setProducts} />
//         </BrowserRouter>
//       );

//       const deleteButton = getByTestId('delete-1'); // assumes the first product has an _id of 1
//       fireEvent.click(deleteButton);

//       expect(deleteProduct).toHaveBeenCalledWith(1, setProducts);
//     });
//   });

test("data render", () => {
  const data = {
    _id: 1,
    Name: "Product 1",
  };
  const { getByText } = render(<ProductDisplay Products={data} />);
  expect(getByText(`_id:${data._id}`)).toBeInTheDocument();
});

