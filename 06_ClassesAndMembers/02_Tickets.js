function solve(arr, sotringCriteira) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let tickets = [];

    for (let ticket of arr) {
        let [destination, price, status] = ticket.split("|");
        price = +price;
        let currentTicket = new Ticket(destination, price, status);
        tickets.push(currentTicket)
    }

    return tickets.sort((a, b) => a[sotringCriteira] > b[sotringCriteira]);
}

console.log(solve([
        'Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
        'status'
));
