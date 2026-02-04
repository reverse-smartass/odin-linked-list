import { linkedlist } from "./linkedlist";
import { node } from "./node";


let ll = new linkedlist();
ll.append(new node(1));
ll.append(new node(2));
ll.prepend(new node(0));

console.log(ll.toString());

describe("fibonacci", () => {
  test("4th fibonacci number is 3", () => {
    expect(ll.toString()).toBe(`(0) -> (1) -> (2) -> null`);
  });
});