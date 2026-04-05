import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import ProductCard from "./ProductCard";

test("renders product in a card", () => {
  const product = {
    Title: "Apple Macbook Pro 16'",
    Cover:
      "https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111932_sp809-mbp16touch-silver-2019.jpeg",
    Price: "2800",
    Description:
      "The 16-inch MacBook Pro is a high-performance Apple laptop designed for professionals, featuring advanced M1/M2/M3 Pro or Max chips. It boasts a 16.2-inch Liquid Retina XDR display (3456×2234) with ProMotion (120Hz), exceptional battery life (up to 22 hours), and abundant ports including Thunderbolt 4, HDMI, and MagSafe 3",
    Discount: true,
  };
  const { getByText } = render(<ProductCard product={product} />);
  expect(getByText("$2800")).toBe(3);
});
