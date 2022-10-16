import ChildrenInterface from "../interfaces/Children"

interface Props extends ChildrenInterface {
  className?: string;
}

function Badge({children, className = ''}: Props) {
  return <span className={`bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded ${className}`}>{children}</span>
}

export default Badge;