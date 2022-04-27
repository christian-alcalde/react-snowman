import { render, fireEvent } from "@testing-library/react";
import Snowman from "./Snowman";
import img0 from "./0.png";
import img1 from "./1.png";
import img2 from "./2.png";
import img3 from "./3.png";
import img4 from "./4.png";
import img5 from "./5.png";
import img6 from "./6.png";

it("smoke test", function () {
  render(
    <Snowman
      images={[img0, img1, img2, img3, img4, img5, img6]}
      words={["apple"]}
      maxWrong={6}
    />
  );
});

it("matches snapshot", function () {
  const { container } = render(
    <Snowman
      images={[img0, img1, img2, img3, img4, img5, img6]}
      words={["apple"]}
      maxWrong={6}
    />
  );

  expect(container).toMatchSnapshot();
});

it("picture stops after 6 guesses", function () {
  const { container } = render(
    <Snowman
      images={[img0, img1, img2, img3, img4, img5, img6]}
      words={["apple"]}
      maxWrong={6}
    />
  );

  const letters = container.querySelectorAll("button");
  for (let i = 0; i < 6; i++) {
    fireEvent.click(letters[i]);
  }

  expect(container.querySelector('img[alt="6"]')).toBeInTheDocument();
});
