class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(data) {
    // creates a new node
    var node = new Node(data);
    // to store current node
    let current;
    // if list is Empty add the
    // element and make it head
    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head;

      // iterate to the end of the
      // list
      while (current.next) {
        current = current.next;
      }
      // add node
      current.next = node;
    }
    this.size++;
  }

  insertAt(data, index) {
    if (index < 0 || index > this.size) {
      return console.log("Invalid index");
    } else {
      var node = new Node(data);
      var curr, prv;
      // add the element to the
      // first index
      if (index == 0) {
        node.next = this.head;
        this.head = node;
      } else {
        curr = this.head;
        var it = 0;

        // iterate over the list to find
        // the position to insert
        while (it < index) {
          prv = curr;
          curr = curr.next;
          it++;
        }
        node.next = curr;
        prv.next = node;
      }
    }
    this.size++;
  }

  removeFrom(index) {
    if (index < 0 || index > this.size) {
      return console.log("Invalid Index");
    } else {
      var curr, prv;
      var it = 0;
      if (index == 0) {
        this.head = curr.next;
      } else {
        // iterate util element
        while (it < index) {
          prv = curr;
          curr = curr.next;
          it++;
        }
        // remove the element

        prv.next = curr.next;
      }
    }
    this.size--;
  }

  removeData(data) {
    var curr = this.head;
    var prv = null;
    while (curr != null) {
      if (curr.data === data) {
        if (prv == null) {
          this.head = curr.next;
        }
      } else {
        prv.next = curr.next;
      }
      this.size--;
      return curr.data;
    }
    prv = curr;
    curr = curr.next;
  }

  printList() {
    var curr = this.head;
    var str = "";
    while (curr) {
      str += curr.data + " -> ";
      curr = curr.next;
    }
    console.log(str);
  }
}

const linkedList = new LinkedList();
linkedList.add(10);
linkedList.add(20);
linkedList.add(30);
linkedList.add(40);
linkedList.insertAt(1, 3);
linkedList.printList();
