function Fedex() {
    this.calculate = package => {
        return 2;
    }
}

function UPS() {
    this.calculate = package => {
        return 1.56;
    }
}

function USPS() {
    this.calculate = package => {
        return 2.56;
    }
}

const fedEx = new Fedex();
const ups = new UPS();
const usps = new USPS();

const package = { from: "Alabama", to: "Georgia", wieght: 20 }

function Shipping() {
    this.company = "";
    this.setStratergy = (company) => {
        this.company = company
    }
    this.calculate = package => {
        return this.company.calculate(package)
    }
}


fedEx.calculate(package);
ups.calculate(package);
usps.calculate(package);

const shipping = new Shipping();
shipping.setStratergy(fedEx);
console.log("Fedex : " + shipping.calculate(package));
shipping.setStratergy(ups);
console.log("UPS : " + shipping.calculate(package));
shipping.setStratergy(usps);
console.log("USPS : " + shipping.calculate(package));