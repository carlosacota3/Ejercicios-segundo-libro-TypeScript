function StaticMethodDecorator(
    target: Function,
    propertyKey: string | symbol, // El nombre del metodo statico
    descriptor: TypedPropertyDescriptor<any>
) {
    console.log("StaticMethodDecorator called on: ", target, propertyKey, descriptor);
}
class StaticMethodDecoratorExample {
    @StaticMethodDecorator
    static staticMethod() {
    }
}
StaticMethodDecorator called on: function StaticMethodDecoratorExample() {

}