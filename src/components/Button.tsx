import Loading from "./Loading";
import ChildrenInterface from "../interfaces/Children"
import ClickableInterface from "../interfaces/Clickable"

interface Props extends ChildrenInterface, ClickableInterface {
  disabled?: boolean;
  loading?: boolean;
  transparent?: boolean;
  className?: string;
}

function Button({children, disabled, loading, onClick, transparent, className = ''}: Props) {
  const wrapperClasses = `${transparent ? 'bg-transparent border border-slate-900 text-slate-900 hover:text-white' : 'bg-slate-900 text-white'} font-medium text-sm py-2 px-4 rounded-lg tracking-wide hover:bg-slate-700 ${className}`,
  innerClasses = "flex items-center justify-center",
  disabledClasses = `${wrapperClasses} opacity-75 pointer-events-none`;

  if (loading) {
    return (
      <button
        className={disabledClasses}
      >
        <span className={innerClasses}>
          <Loading className="mr-2"/>
          Loading...
        </span>
      </button>
    )
  }

  if (disabled) {
    return (
      <button
        className={disabledClasses}
      >
        <span className={innerClasses}>{children}</span>
      </button>
    )
  }

  return (
    <button
      onClick={onClick}
      className={wrapperClasses}
    >
      <span className={innerClasses}>{children}</span>
    </button>
  )
}

export default Button;