import { useNoteQueryStore } from "@/stores/noteQueries.store";
import { TNoteGetResponse } from "@/types/note.type";
import { handleQuery } from "@/utils/api.utils";
import { useMemo } from "react";
import { useInfiniteQuery } from "react-query";
import fetchNotes from "../api/fetchNotes";

export default function useTicketsGet() {
  const { order, title, body } = useNoteQueryStore((state) => state);
  const query = useInfiniteQuery<TNoteGetResponse>(
    ["notes", order, title, body],
    ({ pageParam = 1 }) => {
      return fetchNotes(pageParam, {
        ...(title !== "" && { title }),
        ...(body !== "" && { body }),
        order,
      });
    },
    {
      getNextPageParam: (page) => {
        return handleQuery(page);
      },
    }
  );

  const notes = useMemo(() => {
    return query.data?.pages.reduce((previous, page) => {
      return {
        ...page,
        items: [...previous.items, ...page.items],
      };
    });
  }, [query.data]);

  return {
    notes,
    ...query,
  };
}
