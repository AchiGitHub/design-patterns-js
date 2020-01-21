const items = [
    1, "Dev", false, 102.23
];

function iterator(items) {
    this.items = items;
    this.index = 0;
}

iterator.prototype = {
    hasNext: function () {
        return this.index < this.items.length
    },
    next: function () {
        return this.items[this.index++]
    }
}

const iter = new iterator(items);

console.log(iter.next());
console.log(iter.next());