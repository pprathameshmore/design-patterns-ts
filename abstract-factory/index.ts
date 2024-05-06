interface AbstractFactory {
  createProductA(): AbstractProductA;
  createProductB(): AbstractProductB;
}

interface AbstractProductA {
  usefulFunctionA(): string;
}

interface AbstractProductB {
  usefulFunctionB(): string;

  anotherUsefulFunctionB(collaborator: AbstractProductA): string;
}

class ConcreteProductA implements AbstractProductA {
  public usefulFunctionA(): string {
    return "The result of the product A1";
  }
}

class ConcreteProductB implements AbstractProductB {
  public usefulFunctionB(): string {
    return "The result of the product B1";
  }

  anotherUsefulFunctionB(collaborator: AbstractProductA): string {
    const result = collaborator.usefulFunctionA();
    return `The result of the B1 collaborating with the (${result})`;
  }
}

class AbstractProductA implements AbstractProductA {
  public usefulFunctionA(): string {
    return "The result of the product A";
  }
}

class AbstractProductB implements AbstractProductB {
  public usefulFunctionB(): string {
    return "The result of the product B";
  }
}

class ConcreteFactory1 implements AbstractFactory {
  public createProductA(): AbstractProductA {
    return new ConcreteProductA();
  }

  public createProductB(): AbstractProductB {
    return new ConcreteProductB();
  }
}

class ConcreteFactory2 implements AbstractFactory {
  public createProductA(): AbstractProductA {
    return new ConcreteProductA();
  }

  public createProductB(): AbstractProductB {
    return new ConcreteProductB();
  }
}

function clientCode(factory: AbstractFactory) {
  const productA = factory.createProductA();
  const productB = factory.createProductB();

  console.log(productB.usefulFunctionB());
  console.log(productB.anotherUsefulFunctionB(productA));
}

/**
 * The client code can work with any concrete factory class.
 */
console.log("Client: Testing client code with the first factory type...");
clientCode(new ConcreteFactory1());

console.log("");

console.log(
  "Client: Testing the same client code with the second factory type..."
);
clientCode(new ConcreteFactory2());
