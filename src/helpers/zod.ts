import { any } from "zod";

export function fb<T>(value: T) {
  return any().transform(() => value);
}
