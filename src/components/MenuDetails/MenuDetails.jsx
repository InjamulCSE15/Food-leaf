
export const MenuDetails = ({ food }) => {
    const {category, note, data} = food;
  return (
    <div className="m-5 " >      
      <div className="flex w-full items-center">
        <div className="flex-1 border-b border-gray-300" />
          <div className="px-6 py-3 flex items-center bg-transparent rounded-full shadow-sm bg-slate-100 border border-slate-100">
            <span className="text-red-500 text-lg font-semibold leading-relaxed px-2">{category}</span>
          </div>
        <div className="flex-1 border-b border-gray-300" />
      </div>
      {note && <p className="my-2 text-center truncate text-base leading-5 text-white">{note}</p>}

      <ul role="list" className="divide-y divide-gray-100">
      { data.map((item) => (
        <li key={item.id} className="flex justify-between gap-x-6 py-5 px-4 hover:bg-red-500 transition duration-500 hover:scale-105">
          <div className="flex  min-w-0 gap-x-4">
            <img alt="" src={`./assets/items/${item.img}.png`} className="h-16 w-16 flex-none rounded-full bg-gray-50" />
            <div className="min-w-0 flex-auto">
              <p className="text-base sm:text-xl font-semibold leading-6 text-white">{item.name}</p>
              {item.note && <p className="my-1 truncate text-sm font-light leading-5 text-white">({item.note})</p>}

            </div>
          </div>
          <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            <p className="text-base sm:text-2xl leading-6 text-white">{item.price}</p>            
          </div>
        </li>
      ))}
    </ul>

    </div>

  )
}
