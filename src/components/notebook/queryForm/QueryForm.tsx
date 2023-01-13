import tw, { styled } from "twin.macro";
import OrderSelect from "./OrderSelect";
import SearchInput from "./SearchInput";

const QueryFormContainer = styled.div`
  ${tw`grid grid-cols-2 gap-3`}
`;

export default function QueryForm({ sync }: { sync: () => void }) {
  return (
    <QueryFormContainer>
      <SearchInput sync={sync} />
      <OrderSelect sync={sync} />
    </QueryFormContainer>
  );
}
