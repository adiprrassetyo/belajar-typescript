// ! function

// ? Named function
function create() {
  return "create";
}

// ? Arrow function
const create2 = (): string => "create2";

// ? Anonymous function
const create3 = function () {
  return "create3";
};

// ? Anonymous arrow function
const create4 = function (): string {
  return "create4";
};

console.log(create4());

// void
function print(): void {
  console.log("print");
}

print();

// ? Optional parameter
function add(x: number, y: number): void {
  console.log(`${x} ditambah ${y} hasilnya ${x + y}`);
}

add(1, 2);

// ? Optional parameter
function add2(x: number, y: number): string {
  return `${x} ditambah ${y} hasilnya ${x + y}`;
}

console.log(add2(10, 2));
