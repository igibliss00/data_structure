import LinkedList from "./LinkedList.js";
// const LinkedList = require("./LinkedList.js");

describe("LinkedList", () => {
  let linkedList;
  beforeEach(() => {
    linkedList = new LinkedList();
  });

  it("should append the new node to the tail", () => {
    // when the list is empty
    linkedList.append("nodeValueLast");

    expect(linkedList.size).toBe(1);
    expect(linkedList.peekLast2()).toBe("nodeValueLast");

    // when the list is not empty
    linkedList.append("nodeValueLast1");
    expect(linkedList.size).toBe(2);
    expect(linkedList.peekLast2()).toBe("nodeValueLast1");
  });

  it("shoud prepend the new node to the head", () => {
    // when the list is empty
    linkedList.prepend("nodeValueFirst");

    expect(linkedList.size).toBe(1);
    expect(linkedList.peekFirst()).toBe("nodeValueFirst");

    // when the list is not empty
    linkedList.prepend("nodeValueFirst1");
    expect(linkedList.size).toBe(2);
    expect(linkedList.peekFirst()).toBe("nodeValueFirst1");
  });

  it("should shift the new node from the list", () => {
    // when the list is empty
    const result = linkedList.shift();
    expect(result).toBe(null);

    // when the list is not empty
    linkedList.prepend("shifted");
    const shifted = linkedList.shift();

    expect(linkedList.size).toBe(0);
    expect(shifted).toBe("shifted");
  });

  it("should pop the last node", () => {
    // when the list is empty
    const result = linkedList.pop();
    expect(result).toBe(null);

    // when the list is not empty
    linkedList.append("popped");
    const popped = linkedList.pop();

    expect(linkedList.size).toBe(0);
    expect(popped).toBe("popped");
  });

  it("should return the value of the first node in the list", () => {
    // when the list is empty
    const result = linkedList.peekFirst();
    expect(result).toBe(null);

    // when the list is not empty
    linkedList.append("first");
    linkedList.append("second");
    linkedList.prepend("third");

    expect(linkedList.size).toBe(3);
    expect(linkedList.peekFirst()).toBe("third");
  });

  it("should return the value of the last node", () => {
    // when the list is empty
    const result = linkedList.peekLast1();
    expect(result).toBe(null);

    linkedList.append("first");
    linkedList.prepend("second");
    linkedList.pop();
    linkedList.append("third");

    const result1 = linkedList.peekLast1();
    const result2 = linkedList.peekLast2();

    expect(linkedList.size).toBe(2);
    expect(result1).toBe("third");
    expect(result2).toBe("third");
  });

  it("should return the value of the nth node", () => {
    // nth is greater than the size of the list
    const result = linkedList.peekNth(10);
    expect(linkedList.size).toBe(0);
    expect(result).toBe(null);

    // nth is within the size
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);

    // the list starts from first, 2nd, 3rd...
    const result1 = linkedList.peekNth(2);
    expect(linkedList.size).toBe(3);
    expect(result1).toBe(2);
  });
});
