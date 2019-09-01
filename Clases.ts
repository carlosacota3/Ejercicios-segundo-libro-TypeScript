class FooBase {
    public x: number;
    private y: number;
    protected z: number;
}

// EFECTOS EN UNA INSTANCIA
var foo = new FooBase();
foo.x; //Ok
foo.y; //Error: Private
foo.z; //Error: Protected

// EFECTOS EN UNA CLASE HIJA
class FooChild extends FooBase {
    constructor() {
        super();
        this.x; //Ok
        this.y; //Error: private
        this.z; //Okay
    }
}