import { Expect, Equal } from "../";

function chooseOne<T, K>(option1: T, option2: K): T | K {
  return Math.random() > 0.5 ? option1 : option2;
}

const result1 = chooseOne(true, false);
type test1 = Expect<Equal<typeof result1, boolean>>;

const result2 = chooseOne(1, 2);
type test2 = Expect<Equal<typeof result2, 1 | 2>>;

const result3 = chooseOne(2, "example string");
type test3 = Expect<Equal<typeof result3, 2 | "example string">>;

const result4 = chooseOne(true, 7);
type test4 = Expect<Equal<typeof result4, true | 7>>;
