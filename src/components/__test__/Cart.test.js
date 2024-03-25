import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import Cart from "../Cart";
import MOCK_DATA from "../mocks/mockResListData.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

it("Should Load Restaurant Menu Component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordionHeader = screen.getByText("Premium Thalis (3)");

  fireEvent.click(accordionHeader);

  const foodItems = screen.getAllByTestId("foodItems");

  expect(foodItems.length).toBe(3);

  const addBtn = screen.getAllByRole("button", { name: "Add +" });

  console.log(addBtn.length);

  expect(screen.getByText("Cart (0 Items)")).toBeInTheDocument();

  fireEvent.click(addBtn[0]);

  expect(screen.getByText("Cart (1 Items)")).toBeInTheDocument();

  fireEvent.click(addBtn[0]);

  expect(screen.getByText("Cart (2 Items)")).toBeInTheDocument();

  // Since the itemslist component is already rendered
  expect(screen.getAllByTestId("foodItems").length).toBe(5);

  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));

  expect(screen.getAllByTestId("foodItems").length).toBe(3);

  expect(
    screen.getByText("Cart is Empty. Add Items to the Cart")
  ).toBeInTheDocument();
});
