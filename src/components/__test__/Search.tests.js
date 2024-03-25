import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { SearchSource } from "jest";

// this is htat sam eglobal object of the browser
// we are trying to mock it exactly similar to the original fetch function
// Fetch resolve the promise once and then we convert it to json that will again resturn the promise.
// Here we are not running on actaul browser but on js dom like env
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

// it("Should Render the body component with search button", async () => {
//   await act(async () => {
//     render(
//       <BrowserRouter>
//         <Body />
//       </BrowserRouter>
//     );
//   });

//   const cardsBeforeSearch = screen.getAllByTestId("resCard");
//   expect(cardsBeforeSearch.length).toBe(9);
//   const searchBtn = screen.getByRole("button", { name: "Search" });
//   const searchInput = screen.getByTestId("searchInput");
//   //   console.log(searchInput);
//   fireEvent.change(searchInput, { target: { value: "burger" } });
//   fireEvent.click(searchBtn);
//   // Screen should load some cards
//   const resCards = screen.getAllByTestId("resCard");
//   expect(resCards.length).toBe(1);

//   const carddsAfterSearch = screen.getAllByTestId("resCard");
//   expect(carddsAfterSearch.length).toBe(1);
// });

// it("SHould filter Top Rated Restaurants", async () => {
//   await act(async () => {
//     render(
//       <BrowserRouter>
//         <Body />
//       </BrowserRouter>
//     );
//   });

//   const cardsBeforeFilter = screen.getAllByTestId("resCard");
//   expect(cardsBeforeFilter.length).toBe(9);
//   const topRatedButton = screen.getByRole("button", {
//     name: "Top Rated Restaurants",
//   });
//   fireEvent.click(topRatedButton);
//   const cardsAfterFilter = screen.getAllByTestId("resCard");
//   expect(cardsAfterFilter.length).toBe(2);
// });
