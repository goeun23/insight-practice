import { FixedSizeList as List, ListChildComponentProps } from 'react-window'
import { useCallback, memo } from 'react'

interface DataItem {
  label: string
  value: number
}

interface DataListProps {
  data: DataItem[]
}

// react-window의 Row는 itemData를 통해 전달되므로 Props 구조가 다름
const Row = memo(({ index, style, data }: ListChildComponentProps<DataItem[]>) => {
  const item = data[index]
  return (
    <div style={style} className="py-1 border-b">
      {item.label}: {item.value}
    </div>
  )
})

export default function DataList({ data }: DataListProps) {
  const renderRow = useCallback(
    ({ index, style, data }: ListChildComponentProps<DataItem[]>) => (
      <Row index={index} style={style} data={data} />
    ),
    [data]
  )

  return (
    <List
      height={400}
      itemCount={data.length}
      itemSize={35}
      width="100%"
      itemData={data} // 이걸 넣어야 Row로 전달됨
    >
      {renderRow}
    </List>
  )
}
