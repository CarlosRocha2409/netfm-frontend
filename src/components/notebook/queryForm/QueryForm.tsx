import tw, { styled } from "twin.macro";
import OrderSelect from "./OrderSelect";
import SearchInput from "./SearchInput";

const QFForm = styled.div`
  ${tw`grid grid-cols-2 gap-3`}
`;

export default function QueryForm({ sync }: { sync: () => void }) {
  return (
    <QFForm>
      <SearchInput sync={sync} />
      <OrderSelect sync={sync} />
    </QFForm>
  );
}
