import { Foo } from "./file2";

console.log("Program loaded");

const foo = new Foo("foo");

setInterval(() => foo.getName(), 100);
