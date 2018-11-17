class PaymentProcessor {
    constructor(options) {
        this.payments = [];
        this.types = ["service", "product", "other"];
        this.precision = 2;
        if (options) {
            this.setOptions(options);
        }
    }

    setOptions(options) {
        if (options.types) {
            this.types = options.types;
        }
        if (options.precision) {
            this.precision = options.precision;
        }
    }

    registerPayment(id, name, type, value) {
        if (id === "" || name === "" || typeof value !== 'number' ||
            !this.types.includes(type)) {

            throw new Error();
        }

        this.payments.forEach(pmt => {
            if (pmt.id === id) {
                throw new Error();
            }
        });

        let currentPayment = {
            id: id,
            name: name,
            type: type,
            value: Number(value.toFixed(this.precision))
        };

        this.payments.push(currentPayment);
    }


    deletePayment(id) {
        let deleted = false;
        this.payments.forEach((pmt,index) => {
            if (pmt.id === id) {
                this.payments.splice(index, 1);
                deleted = true;
            }
        });
        if (!deleted) {
            throw new Error();
        }
    }

    get(id) {
        for (let i = 0; i, this.payments.length; i++) {
            if (this.payments[i].id === id) {
                let output = "";
                output += `Details about payment ID: ${id}\n`;
                output += `- Name: ${this.payments[i].name}\n`;
                output += `- Type: ${this.payments[i].type}\n`;
                output += `- Value: ${this.payments[i].value.toFixed(this.precision)}`;
                return output;
            }
        }
        throw new Error();
    }

    toString() {
        let output = "";
        let balance = 0;
        let paymentsCount = this.payments.length;
        if (paymentsCount > 1) {
            this.payments.forEach((pmt) => {
                balance+= pmt.value;
            });
        } else if(paymentsCount === 0) {
            balance = 0;
        } else {
            balance = this.payments[0].value;
        }
        output += "Summary:\n";
        output += `- Payments: ${paymentsCount}\n`;
        output += `- Balance: ${balance.toFixed(this.precision)}\n`;
        return output;
    }
}

const generalPayments = new PaymentProcessor();
generalPayments.registerPayment('0001', 'Microchips', 'product', 15000);
generalPayments.registerPayment('01A3', 'Biopolymer', 'product', 23000);
generalPayments.setOptions({types: ['product', 'material']});
generalPayments.registerPayment('E028', 'Rare-earth elements', 'material', 8000);
generalPayments.registerPayment('CF15', 'Enzymes', 'material', 55000);
generalPayments.deletePayment('E028');
console.log(generalPayments.toString());





