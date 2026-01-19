function generic<x,y,z>(Id: x, Age: y, name: z) {
    console.log(`userId: ${Id}, age: ${Age}, name: ${name}`)
}
generic("101", 28, "wasim");
generic(101, 28, "omar");
generic(101, "28", 28);
generic("101", "28", 140);