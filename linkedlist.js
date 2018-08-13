function Node(data, next, prev) {
	this.data = data;
	this.next = next;
	this.prev = prev;
};

function LinkedList() {
	this.head = null;
	this.tail = null;
};

LinkedList.prototype.addToHead = function(data) {
	var oldHead = this.head;	
	var newHead = new Node(data, oldHead, null);	
	if (oldHead) { // the list wasn't empty
		oldHead.prev = newHead;
	} else {
		this.tail = newHead;
	}
	this.head = newHead;
};

LinkedList.prototype.addToTail = function(data) {
	var oldTail = this.tail;
	var newTail = new Node(data, null, oldTail);
	if (oldTail) { // the list wasn't empty
		oldTail.next = newTail;
	} else {
		this.head = newTail;
	}
	this.tail = newTail;
};

LinkedList.prototype.removeHead = function() {
	var oldHead = this.head;
	if (oldHead) { // the list wasn't empty
		var newHead = oldHead.next;
		if (newHead) { // the new list is not empty
			newHead.prev = null;
		} else {
			this.tail = null;
		}
		this.head = newHead;
	}
	return oldHead;
};

LinkedList.prototype.removeTail = function() {
	var oldTail = this.tail;
	if (oldTail) { // the list wasn't empty
		var newTail = oldTail.prev;
		if (newTail) { // the new list is not empty
			newTail.next = null;
		} else {
			this.head = null;
		}
		this.tail = newTail;
	}
	return oldTail;
};

LinkedList.prototype.search = function(data) {
	var node = this.head;

	while (node) {
		if (node.data === data) {
			return node;
		}
		node = node.next;
	}
	return null;
};

LinkedList.prototype.indexOf = function(data) {
	var node = this.head;
	var i = 0;
	var indexes = [];
	while (node) {
		if (node.data === data)
			indexes.push(i);
		i = i+1;
		node = node.next;
	}
	return indexes;
};

var ll = new LinkedList();
ll.addToTail(1);
ll.addToTail(2);
ll.addToTail(3);
ll.addToTail(1);
console.log(ll.indexOf(1));
