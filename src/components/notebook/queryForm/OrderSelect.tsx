import FormControl from "@/components/forms/FormControl";
import Select from "@/components/forms/Select";
import { useNoteQueryStore } from "@/stores/noteQueries.store";
import { ORDERS, TNoteOrder } from "@/types/note.type";

export default function OrderSelect({ sync }: { sync: () => void }) {
  const { order, register } = useNoteQueryStore((state) => state);

  const handleOrderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    register({
      order: +e.target.value as TNoteOrder,
    });
    sync();
  };
  return (
    <FormControl label="Order By">
      <Select value={order} onChange={handleOrderChange}>
        {ORDERS.map((order) => (
          <option key={order.value} value={order.value}>
            {order.name}
          </option>
        ))}
      </Select>
    </FormControl>
  );
}
