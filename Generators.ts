function* generator() {
    try {
        yield 'foo';
        throw Error("Test");
    }
    catch (err) {
        console.log(err.message); // bar!
    }
}
var iterator = generator();
var foo = iterator.next();
console.log(foo.value);
var foo = iterator.next();