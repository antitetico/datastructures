function BST(data) {
	this.data = data;
	this.left = null;
	this.right = null;
};

BST.prototype.insert = function(data) {
	
	if (data <= this.data) {
		if (this.left)
			this.left.insert(data);
		else
			this.left = new BST(data);
	} else {
		if (this.right)
			this.right.insert(data);
		else	
			this.right = new BST(data);
	}
}

BST.prototype.contains = function(data) {
	if (this.data === data)
		return true;
	else 
		if (this.data > data && this.left)
			return this.left.contains(data);
		else if (this.data < data && this.right)
			return this.right.contains(data);
	return false;
};

BST.prototype.depthFirstTraversal = function(iteratorFunc, order) {
	// IN-ORDER: left child first, then parent, then right child
	// PRE-ORDER: parent first, then left child, then right child
	// POST-ORDER: left child first, then right child, then parent
	
	if (order === "PRE-ORDER")
		iteratorFunc(this.data);

	if (this.left) this.left.depthFirstTraversal(iteratorFunc, order);
	
	if (order === "IN-ORDER")
		iteratorFunc(this.data);
	
	if (this.right) this.right.depthFirstTraversal(iteratorFunc, order);
	
	if (order === "POST-ORDER")
		iteratorFunc(this.data);
};

BST.prototype.breadthFirstTraversal = function(iteratorFunc) {
	var queue = [this];
	
	while (queue.length > 0) {
		var node = queue.shift();
		iteratorFunc(node.data);
		if (node.left)
			queue.push(node.left);
		if (node.right)
			queue.push(node.right);
	}
};

BST.prototype.getMin = function() {
	
	if (this.left)
		return this.left.getMin();
	else return this.data;
};

BST.prototype.getMax = function() {
	if (this.right)
		return this.right.getMax();
	else return this.data;
};
