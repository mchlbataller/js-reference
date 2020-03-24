let myPrototype = {
    print() {
        console.log(`${this.line} nice`);
    }
};

// The myPrototype object has its own properties, 
// thus it is a prototype which could be cloned for another use.
myPrototype.line = "Yeah";
myPrototype.print();