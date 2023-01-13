import React, { useMemo, useRef } from "react";
import useGetNotes from "@/hooks/useGetNotes";
import InfiniteScroll from "react-infinite-scroll-component";
import tw, { styled } from "twin.macro";
import Note from "./Note";
import Loader from "../general/Loading";
import QueryForm from "./queryForm/QueryForm";

const NotebookContainer = styled.div`
  ${tw`h-full flex flex-col gap-4`}
  .infinite-scroll-component {
    ::-webkit-scrollbar {
      width: 0px;
    }
  }
`;
const NoteFormContainer = styled.div``;
const NoteList = styled.div`
  ${tw`grid gap-9 md:gap-[0.5rem]`}
`;

export default function NoteBookHome() {
  const { hasNextPage, fetchNextPage, notes, refetch } = useGetNotes();
  const containerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  return (
    <NotebookContainer ref={containerRef}>
      <NoteFormContainer ref={formRef}>
        <QueryForm sync={refetch} />
      </NoteFormContainer>
      <InfiniteScroll
        hasMore={!!hasNextPage}
        next={() => fetchNextPage()}
        height={`${
          containerRef.current && formRef.current
            ? containerRef.current.offsetHeight -
              formRef.current.offsetHeight -
              10
            : 400
        }px`}
        dataLength={notes ? notes.items.length : 0}
        loader={<Loader />}
      >
        <NoteList>
          {notes &&
            notes.items.map((note) => <Note key={note.id} note={note} />)}
        </NoteList>
      </InfiniteScroll>
    </NotebookContainer>
  );
}
