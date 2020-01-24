import { startSearchTest, startNewSearchTest } from "./testFuncs/searchTest";

describe("Search must return correct answers", () => {
  test("Show correct cards", () => {
    const array = [
      {
        title: "foo",
        priority: "High",
        isDone: false,
        isVisible: true
      },
      {
        title: "bar",
        priority: "Low",
        isDone: false,
        isVisible: true
      },
      {
        title: "bar",
        priority: "Low",
        isDone: true,
        isVisible: true
      }
    ];
    const searchData = {
      title: "ba",
      priority: "All",
      isDone: true
    };
    startNewSearchTest(searchData, array);
    console.log(array);

    expect(array[0].isVisible).toEqual(false);
    expect(array[1].isVisible).toEqual(false);
    expect(array[2].isVisible).toEqual(true);
  });
});
