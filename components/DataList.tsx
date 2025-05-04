import {FixedSizeList as List} from 'react-window'
const Row = ({index, style, data})=> {
  const item = data[index]
  return (
    <div style={style} className='py-1 border-b'>
      {item.label}: {item.value}
    </div>
  )
}
export default function DataList({ data }) {
  return (
    <List 
      height={400}
      itemCount={data.length}
      itemSize={35}
      width="100%"
      itemData={data}
    >
      {Row}
    </List>
  )
}
