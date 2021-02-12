import { nanoid } from "nanoid";

export function attachId<T>(arr: Array<T>) {
  const res = arr.map((a) => {
    return { ...a, id: nanoid(5) };
  });
  return res;
}
