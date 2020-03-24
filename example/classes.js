// Exercise: Make a new class that accepts objects

function Person(data) {
    this.data = data;

    // initialize
    console.log(`New instance of person initialized. Full Name: ${this.data.name.first} ${this.data.name.last}`);
}

Person({ name: { first: "michael", last: "bataller" }});

