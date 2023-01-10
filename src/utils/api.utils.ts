import { IPaginationResponse } from "@/types/pagination.type";

export function handleQuery<T>(lastPage: IPaginationResponse<T>) {
  const previousPage = lastPage.page;

  if (lastPage.totalItems - previousPage * lastPage.itemsPerPage <= 0)
    return false;

  return previousPage + 1;
}

export function convertDate(date: Date) {
  return new Date(date).toLocaleString("en-us", { hour12: true });
}
