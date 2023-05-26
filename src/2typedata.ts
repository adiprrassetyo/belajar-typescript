let isMarried: boolean = false;

// type data number
let myName: string = "adi";
let age: number = 20;
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// error
// isMarried = "adi";
// age = "adi";
// age = true;

// type data string
let firstName: string = "adi";
let lastName: string = "prasetyo";
let fullName: string = `${firstName} ${lastName}`;
let nama: string = "adi";
nama = nama + "prasetyo";
let hello: string = `hello ${nama}`;

// error
// lastName = true;

console.log(isMarried);
console.log(myName);
console.log(fullName);

type Wanita = string;
type Pria = string;

type Kelamin = Wanita | Pria;

let akuManusia: Kelamin;

akuManusia = "adi";
