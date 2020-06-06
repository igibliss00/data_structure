import LinkedList from "./LinkedList.js";
// const LinkedList = require("./LinkedList.js");

describe("LinkedList", () => {
  let linkedList;
  beforeEach(() => {
    linkedList = new LinkedList();
  });
  it("should append to the tail", () => {
    linkedList.append("nodeValue");

    expect(linkedList.peekFirst()).toBe("nodeValue");
  });
});
