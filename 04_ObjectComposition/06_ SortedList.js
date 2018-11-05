function sortedList() {
    return {
        list: [],
        size: 0,
        add: function (element) {
            this.list.push(element);
            this.size++;
            this.sort();
        },
        remove: function (index) {
            if (index >= 0 && index < this.list.length) {
                this.list.splice(index, 1);
                this.size--;
            }
        },
        get: function (index) {
            if (index >= 0 && index < this.list.length) {
                return this.list[index];
            }
        },
        sort: function () {
            this.list.sort((a, b) => a - b);
        }
    }
}

let sorted = sortedList();
sorted.add(15);
sorted.add(9);
sorted.add(-12);
sorted.add(-18);
sorted.remove(2);
console.log(sorted.get(0));
console.log(sorted.list);