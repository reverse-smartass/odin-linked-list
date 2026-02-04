import { linkedlist } from "./linkedlist";
import { node } from "./node";

describe("linkedlist", () => {
  let ll = new linkedlist();
  let node1 = new node(1);
  let node1N = new node(-1);
  let node0 = new node(0);
  let ins = new node(3);

  ll.append(new node(-0.5));
  ll.append(node0);
  ll.append(new node(0.5));
  ll.append(node1);
  ll.toString();

  ll.prepend(node1N);

  ll.toString();

  ll.insert(2, ins);

  ll.toString();

  ll.remove(3);

  ll.toString();

  test("prepend", () => {
    expect(ll.head()).toStrictEqual(node1N);
  });
  test("append", () => {
    expect(ll.tail()).toStrictEqual(node1);
  });

  test("at", () => {
    expect(ll.valueAt(2)).toStrictEqual(node0.value);
  });

  test("insert", () => {
    expect(ll.at(2)).toStrictEqual(ins);
  });
});
