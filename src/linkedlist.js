export class linkedlist {
  #liststart;

  #listend;

  #length;

  constructor() {
    this.#liststart = undefined;
    this.#listend = undefined;
    this.#length = 0;
  }

  append(node) {
    if (this.#liststart === undefined) {
      this.#liststart = node;
    } else {
      this.#listend.next = node;
    }
    this.#listend = node;
    this.#length += 1;
  }

  prepend(node) {
    if (this.#liststart === undefined) {
      this.#listend = node;
    } else {
      node.next = this.#liststart;
    }
    this.#liststart = node;
    this.#length += 1;
  }

  pop() {
    if (this.#length > 0) {
      const val = this.#liststart.value;
      this.#liststart = this.#liststart.next();
      this.#length -= 1;
      return val;
    } else {
      return undefined;
    }
  }

  at(index) {
    if (index > this.#length - 1) {
      return undefined;
    } else {
      let node = this.#liststart;
      for (let i = 0; i < index; i++) {
        node = node.next;
      }
      return node;
    }
  }

  valueAt(index) {
    return this.at(index).value;
  }

  remove(index) {
    if (index >= this.#length || index < 0) {
      throw new RangeError();
    }

    if (index === 0) {
      this.#length === 1
        ? (this.#liststart = this.#liststart.next)
        : (this.#liststart = undefined);
    } else {
      let prevnode = this.at(index - 1);
      prevnode.next = prevnode.next.next;
    }

    this.#length -= 1;
  }

  insert(index, node) {
    if (index > this.#length || index < 0) {
      throw new RangeError();
    }

    if (index === 0) {
      this.prepend(node);
    } else if (index === this.#length) {
        this.append(node);
    } else {
      let prevnode = this.at(index-1);
      let nextnode = prevnode.next;
      node.next = nextnode;
      prevnode.next = node;
    }

    this.#length += 1;
  }

  contains(value) {
    let node = this.#liststart;
    for (let i = 0; i < this.#length; i++) {
      if (node.value === value) {
        return true;
      }
      node = node.next;
    }
    return false;
  }

  size() {
    return this.#length;
  }

  head() {
    return this.#liststart;
  }
  tail() {
    return this.#listend;
  }

  toString() {
    let node = this.#liststart;
    let message = "";
    while (node !== null) {
      message += `( ${node.value} ) -> `;
      node = node.next;
    }
    console.log(message + "null");
    return message + "null";
  }
}
