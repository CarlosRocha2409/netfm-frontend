import fetchNotes from "@/api/fetchNotes";
import { useInfiniteQuery } from "react-query";

interface IUseInfiniteScrollProps {
  keys: string[];
}

export default function useInfiniteScroll({ keys }: IUseInfiniteScrollProps) {}
