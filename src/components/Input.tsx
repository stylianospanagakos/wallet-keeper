import ChangableInterface from "../interfaces/Changable"

interface Props extends ChangableInterface {
  id?: string;
  label?: string;
  type?: string;
  placeholder?: string;
  value: string | number;
  error?: string;
  disabled?: boolean;
}

function Input({id = '', label = '', type = 'text', placeholder = 'Enter value', value, onChange, error = '', disabled = false}: Props) {
  let commonClasses = 'bg-gray-50 border sm:text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-400 dark:text-white';
  if (error.length) {
    commonClasses += ' text-rose-500 border-rose-300 outline-rose-500 focus:ring-rose-500 focus:border-rose-500 dark:focus:ring-rose-500 dark:focus:border-rose-500 dark:bg-rose-700 dark:border-rose-600';
  } else {
    commonClasses += 'text-gray-900 border-gray-300 focus:ring-indigo-600 focus:border-indigo-600 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600';
  }

  return (
    <div>
      {!!label.length &&
        <label
          htmlFor={id}
          className="block mb-2 text-xs font-medium text-gray-900 dark:text-white"
        >{label}</label>
      }
      <input
        id={id}
        type={type}
        className={commonClasses}
        placeholder={placeholder}
        value={value}
        onInput={onChange}
        disabled={disabled}
      />
      {!!error.length && <small className='text-rose-500'>{error}</small>}
    </div>
  )
}

export default Input;