import { deleteAsync } from 'del';

export function clean() {
    const obj = { a: { b: 5 } };
    console.log(obj?.a?.b);  // powinno wypisać 5


    return deleteAsync(["dist"]);
}