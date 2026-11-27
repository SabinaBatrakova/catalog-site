import { getWork } from "@/lib/works";
import { PhoneFrame } from "./PhoneFrame";

// Порядок и ширина телефонов: средний самый крупный, к краям меньше
const ROW = [
  { id: "ipodo-expert-lab", width: 200 },
  { id: "tennis-1", width: 225 },
  { id: "coffee-1", width: 260 },
  { id: "rental-1", width: 225 },
  { id: "ipodo", width: 200 },
];

export function PhoneRow() {
  return (
    <div className="flex items-center justify-center gap-6 overflow-hidden py-16">
      {ROW.map(({ id, width }) => {
        const work = getWork(id);
        if (!work) return null; // если id с опечаткой — просто пропускаем

        return <PhoneFrame key={id} work={work} width={width} />;
      })}
    </div>
  );
}