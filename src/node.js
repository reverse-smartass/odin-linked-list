export class node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }

  hasNext() {
    return this.next !== null;
  }
}
