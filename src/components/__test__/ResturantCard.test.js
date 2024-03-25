import { render, screen } from "@testing-library/react";
import RestaurantCard, { withIsOpenLabel} from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should render Res Card Component with props Data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);
  const name = screen.getByText("UBQ by Barbeque Nation");
  expect(name).toBeInTheDocument();
});

// it("Should render Res coponent with Promoted Label", () => {
//   render(withIsOpenLabel(RestaurantCard));
//   const isOpen = screen.getByText("IsOpen");
//   expect(isOpen).toBeInTheDocument();
// });
