class BookCollection {
    constructor(shelfGenre, room, shelfCapacity) {
        this.room = room;
        this.shelfGenre = shelfGenre;
        this.shelfCapacity = shelfCapacity;
        this.shelf = [];
    }

    get room() {
        return this._room;
    }

    set room(currentRoom) {
        switch (currentRoom) {
            case "livingRoom":
            case "bedRoom":
            case "closet":
                this._room = currentRoom;
                break;
            default:
                throw(`Cannot have book shelf in ${currentRoom}`)
        }
    }

    get shelfCondition() {
        return this.shelfCapacity - this.shelf.length;
    }

    addBook(bookName, bookAuthor, genre) {
        let book = {
            bookName,
            bookAuthor,
            genre
        };
        if (this.shelfCondition === 0) {
            this.shelf.shift();
        }
        this.shelf.push(book);
        this.shelf.sort((a,b) => a.bookAuthor.localeCompare(b.bookAuthor));
        return this;
    }

    throwAwayBook(bookName) {
        this.shelf = this.shelf.filter((b) => b.bookName !== bookName);
    }

    showBooks(genre) {
        let output = "";
        output += `Results for search "${genre}":\n`;
        this.shelf.forEach((b) => {
            if (b.genre === genre) {
                output += `📖 ${b.bookAuthor} - "${b.bookName}"\n`;
            }
        });
        return output.trim();
    }

    toString() {
        if (this.shelf.length === 0) {
            return "It's an empty shelf"
        }
        let result ="";
        result += `"${this.shelfGenre}" shelf in ${this.room} contains:\n`;
        this.shelf.forEach((b) => {
            result+= `📖 "${b.bookName}" - ${b.bookAuthor}\n`
        });
        return result.trim();
    }
}

// let garden = new BookCollection("Programming", "garden");

// let livingRoom = new BookCollection("Programming", "livingRoom", 5);
// console.log(livingRoom.shelfGenre);

let livingRoom = new BookCollection("Programming", "livingRoom", 5)
    .addBook("Introduction to Programming with C#", "Svetlin Nakov")
    .addBook("Introduction to Programming with Java", "Svetlin Nakov")
    .addBook("Programming for .NET Framework", "Avetlin Nakov");
livingRoom.throwAwayBook("Introduction to Programming with Java");

let bedRoom = new BookCollection('Mixed', 'bedRoom', 5);
bedRoom.addBook("John Adams", "David McCullough", "history");
bedRoom.addBook("The Guns of August", "Cuentos para pensar", "history");
bedRoom.addBook("Atlas of Remote Islands", "Judith Schalansky");
bedRoom.addBook("Paddle-to-the-Sea", "Holling Clancy Holling");
console.log("Shelf's capacity: " + bedRoom.shelfCondition);
console.log(bedRoom.showBooks("history"));

let closet = new BookCollection("Programming", "livingRoom", 5)
    .addBook("Introduction to Programming with C#", "Svetlin Nakov")
    .addBook("Introduction to Programming with Java", "Svetlin Nakov")
    .addBook("Programming for .NET Framework", "Svetlin Nakov");
console.log(livingRoom.toString());



