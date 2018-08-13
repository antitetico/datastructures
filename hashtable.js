function HashTable(size) {
	this.buckets = new Array(size);
	this.size = this.buckets.length;
};

function HashNode(key, value, next) {
	this.key = key;
	this.value = value;
	this.next = next || null;
};

HashTable.prototype.hash = function(key) {
	var total = 0;
	for (var i = 0; i < key.length; i++)
		total = total + key.charCodeAt(i);
	return total%this.size;
};

HashTable.prototype.insert = function(key, value) {
	var hashedKey = this.hash(key);
	var hashNode = this.buckets[hashedKey];
	if (!hashNode) { 
		var newHashNode = new HashNode(key, value);
		this.buckets[hashedKey] = newHashNode;
	} else {
		while (hashNode.next && hashNode.key !== key) { 
			hashNode = hashNode.next;
		}
		if (hashNode.key === key)
			hashNode.value = value;
		else {
			var newHashNode = new HashNode(key, value);
			hashNode.next = newHashNode;	
		}
	}
};

HashTable.prototype.get = function(key) {
	var hashedKey = this.hash(key);
	var hashNode = this.buckets[hashedKey];
	if (!hashNode) return null;
	else {
		while (hashNode.next && hashNode.key !== key) {
			hashNode = hashNode.next;
		}
		if (hashNode.key === key)
			return hashNode;
		else return null;
	}
};

HashTable.prototype.retrieveAll = function() {
	var results = [];
	for (var i = 0; i < this.size; i++) {
		var hashNode = this.buckets[i];
		while (hashNode) {
			results.push(hashNode);
			hashNode = hashNode.next;
		}
	}
	return results;
};

var ht = new HashTable(30);
console.log(ht);
console.log(ht.hash("abe"));
ht.insert("ale","1");
ht.insert("abe","2");
ht.insert("lea","3");
ht.insert("abe","4");
ht.insert("lea","5");
ht.insert("ela","6");
console.log(ht);
console.log(ht.get("lea"));
console.log(ht.retrieveAll());
