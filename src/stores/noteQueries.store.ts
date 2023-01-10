import { TNoteOrder } from "@/types/note.type";
import create from "zustand";

interface INoteQueries {
  body: string;
  order: TNoteOrder;
  title: string;
}

interface INoteQueryState extends INoteQueries {
  register: (queries: Partial<INoteQueries>) => void;
  reset: () => void;
}

const INITIAL_VALUES = {
  body: "",
  order: 0 as TNoteOrder,
  title: "",
};

export const useNoteQueryStore = create<INoteQueryState>((set) => ({
  ...INITIAL_VALUES,
  register: (queries) => {
    set((state) => {
      return {
        ...state,
        ...queries,
      };
    });
  },
  reset: () => {
    set((state) => ({
      ...state,
      ...INITIAL_VALUES,
    }));
  },
}));
