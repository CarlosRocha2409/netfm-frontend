import { IPaginationResponse } from "@/types/pagination.type";

export function handleQuery<T>(lastPage: IPaginationResponse<T>) {
  const previousPage = lastPage.page;

  if (lastPage.totalItems - previousPage * lastPage.itemsPerPage <= 0)
    return false;

  return previousPage + 1;
}

export function convertDate(date: Date) {
  const now = new Date(date);
  const covnvertedDate = new Date(
    now.getTime() - now.getTimezoneOffset() * 60000
  );
  return new Date(covnvertedDate).toLocaleString(undefined, {
    hour12: true,
    timeZone: "America/Managua",
  });
}
