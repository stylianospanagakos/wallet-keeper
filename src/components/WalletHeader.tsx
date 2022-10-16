interface Props {
  title: string;
  truncatedAddress: string;
}

function WalletHeader({title, truncatedAddress}: Props) {
  return (
    <div>
      <h3 className="font-semibold tracking-wider text-gray-800 mb-1">{title}</h3>
      <p className="text-sm text-gray-500">{truncatedAddress}</p>
    </div>
  )
}

export default WalletHeader;