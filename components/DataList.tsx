export default function DataList({ data }) {
  return (
    <ul className="overflow-auto h-[400px] border rounded p-2">
      {data.map((item) => (
        <li key={item.id} className="py-1 border-b">
          {item.label}: {item.value}
        </li>
      ))}
    </ul>
  )
}
