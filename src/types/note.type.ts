import { IPaginationResponse } from "./pagination.type";
import { ITopic } from "./topic.type";

export interface INote {
  id: number;
  title: string;
  body: string;
  creation: Date;
  topic: ITopic;
  
}

export type TNoteGetResponse = IPaginationResponse<INote>;

export const NO_ORDER = 0;
export const ORDER_BY_TITLE = 1;
export const ORDER_BY_TOPIC = 2;
export const ORDER_BY_DATE = 3;

export type TNoteOrder =
  | typeof NO_ORDER
  | typeof ORDER_BY_TITLE
  | typeof ORDER_BY_TOPIC
  | typeof ORDER_BY_DATE;

export const ORDERS = [
  {
    name: "All",
    value: NO_ORDER,
  },

  {
    name: "By Title",
    value: ORDER_BY_TITLE,
  },
  {
    name: "By Date",
    value: ORDER_BY_DATE,
  },

  {
    name: "By Topic",
    value: ORDER_BY_TOPIC,
  },
];

export interface INoteInput {
  title: string;
  body: string;
  topicId: number;
}

export interface INoteQueries {
  order?: TNoteOrder;
  title?: string;
  body?: string;
}
