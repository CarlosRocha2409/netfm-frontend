import { UseQueryOptions } from "react-query";

export type TQueryOptions<T> = UseQueryOptions<
  T,
  unknown,
  any,
  (string | number)[]
>;
