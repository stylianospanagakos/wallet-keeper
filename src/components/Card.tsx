import ChildrenInterface from "../interfaces/Children"

interface Props extends ChildrenInterface {
  className?: string;
}

function Card({children, className}: Props) {
  return <div className={`bg-white p-4 shadow rounded ${className}`}>{children}</div>
}

export default Card;