let message = () => 
{
  console.log('hello world');
}

let greet: Function;
greet = () => 
{
  console.log('hello, again');
}

// optionial ?
const add = (a: number, b: number, c?: number | string) => 
{
  console.log(a + b)
}

// default parameter
const minus = (a: number, b: number, c: number | string = 10) => 
{
  console.log(a - b)
}

add(3, 4);
