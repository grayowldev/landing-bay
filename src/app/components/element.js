
export const Element = ({children, isActive, onClick}) => {
  return (
      <div onClick={onClick} className={`hover:border-2 hover:border-sky-700 ${isActive ? 'border-2 border-sky-700' : ''}`}>
        {children}
      </div>
  )
}