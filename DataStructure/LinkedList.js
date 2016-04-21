function LinkedList (v) {
  this._length = 0;
  this._head = null;

  if (!this.prototype.add) {

  }

}

LinkedList.prototype.add = function (v) {
  var currrent,
      node = {
        data: v,
        next: null
      };

  if (!this._head) {
    this._head = node;
  } else {
    currrent = this._head;
    while (currrent.next) {
      currrent = currrent.next;
    }
    currrent.next = node;
  }

  this._length++;
};
