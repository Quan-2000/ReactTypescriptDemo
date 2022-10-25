type ListProps<ITEMS> = {
  items: ITEMS[],
  onClick: (value: ITEMS) => void
} 

export const List = <ITEMS extends { id: number }>({ 
  items, 
  onClick,
}: ListProps<ITEMS>) => {
  return (
    <div>
      <h2>List of items</h2>
      {items.map((item, index) => {
        return (
          <div key={item.id} onClick={() => onClick(item)}>
            {JSON.stringify(item)}
          </div>
        )
      })}
    </div>
  )
}