import {ArrowLeftIcon} from '@heroicons/react/24/solid'
import {useNavigate} from "react-router-dom"

function BackHeader() {
  const navigate = useNavigate();

  return (
    <div className="my-4 text-start">
      <button className="flex items-center font-semibold" onClick={() => navigate(-1)}>
        <ArrowLeftIcon className="w-5 mr-3"/>
        <p>Back</p>
      </button>
    </div>
  )
}

export default BackHeader;