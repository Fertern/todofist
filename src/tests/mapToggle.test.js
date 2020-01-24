import { mapToggle } from "../utils/mapHelpers";

describe("Map toggle", () => {
  test("Return correct data", () => {
    const array = [
      { id: 1, data: true },
      { id: 2, data: false }
    ];
    const result = mapToggle(array, 2, "data");
    console.log(result);

    expect(result[1].data).toEqual(true);
  });
});
