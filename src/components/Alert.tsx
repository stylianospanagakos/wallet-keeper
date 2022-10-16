import ChildrenInterface from "../interfaces/Children"
import {InformationCircleIcon, ExclamationTriangleIcon} from '@heroicons/react/24/solid'

interface Props extends ChildrenInterface {
  type?: 'info' | 'warning' | 'danger';
}

function Alert({type = 'info', children}: Props) {
  let theme = 'bg-indigo-100 text-indigo-700',
    icon = <InformationCircleIcon className="w-7 text-indigo-500 mr-3"/>;

  if (type === 'danger') {
    theme = 'bg-rose-100 text-rose-700';
    icon = <ExclamationTriangleIcon className="w-7 text-rose-500 mr-3"/>;
  } else if (type === 'warning') {
    theme = 'bg-yellow-100 text-yellow-700';
    icon = <ExclamationTriangleIcon className="w-7 text-yellow-500 mr-3"/>;
  }

  return (
    <div className={`${theme} flex p-4 mb-4 text-sm rounded-lg items-center`} role="alert">
      {icon}
      <div>
        {children}
      </div>
    </div>
  )
}

export default Alert;