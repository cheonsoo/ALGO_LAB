export function add<T extends string | number>(a: T, b: T): T extends string ? string : number {
  return <any> a + <any> b;
}

const result = add<number>(2, 3);
console.log(result);