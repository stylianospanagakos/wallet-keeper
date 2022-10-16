import ClickableInterface from "../interfaces/Clickable";
import ReactTooltip from 'react-tooltip';

interface Props extends ClickableInterface {
  name: string;
  alt: string;
  size?: string;
  logo: string;
  selected?: boolean;
}

function NetworkButton({onClick, name, logo, alt, size, selected}: Props) {
  return (
    <button
      onClick={onClick}
      className={!selected ? 'opacity-40 hover:opacity-100 transition' : ''}
      data-effect="solid"
      data-tip={name}
      data-padding="8px"
      data-text-color="text-gray-800"
    >
      <ReactTooltip place="right" type="light" className="shadow font-semibold"/>
      <img src={logo} alt={alt} className={`inline-block ${size ?? 'w-8'}`} />
    </button>
  )
}

export default NetworkButton;