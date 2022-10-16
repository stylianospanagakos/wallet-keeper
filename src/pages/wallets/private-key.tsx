import { FormEvent, useState } from "react";
import BackHeader from "../../components/BackHeader";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Input from "../../components/Input";
import { hasPasswordError} from "../../libs/helpers";
import WalletAdaptor from "../../libs/WalletAdaptor";
import Badge from "../../components/Badge";
import useWallet from "../../hooks/useWallet";
import WalletHeader from "../../components/WalletHeader";

function PrivateKey() {
  const [key, setKey] = useState<string>('')
  const [errorResponse, setErrorResponse] = useState<string>('')
  const [password, setPassword] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false)
  const {wallet, truncatedAddress} = useWallet()

  function handlePasswordChange(event: FormEvent) {
    const value = (event.currentTarget as HTMLInputElement).value
    setPassword(value)
    setPasswordError(hasPasswordError(value))
  }

  function handleFormSubmission(event: FormEvent) {
    event.preventDefault();
    if (wallet) {
      setLoading(true)
      setKey('')
      setErrorResponse('')
      try {
        const decrypted = WalletAdaptor.getInstance().decrypt(wallet.encrypted, password)
        const privateKey = decrypted[0].privateKey
        setKey(privateKey)
      } catch (err) {
        setErrorResponse('Invalid password.')
      } finally {
        setPassword('')
        setLoading(false)
      }
    }
  }

  if (!wallet) {
    return (
      <Card>
        <p>No wallet found.</p>
      </Card>
    )
  }

  return (
    <>
      <BackHeader/>
      <Card className="space-y-5">
        <WalletHeader title={wallet.title} truncatedAddress={truncatedAddress}/>
        <form className="space-y-5" onSubmit={handleFormSubmission}>
          <Input
            type="password"
            placeholder="Enter wallet password"
            value={password}
            onChange={handlePasswordChange}
            error={passwordError}
            disabled={loading}
          />
          <Button className="w-full text-center" loading={loading}>Show Private Key</Button>
        </form>
        <>
          {!!key.length && (
            <Badge className="block break-words mt-4">{key}</Badge>
          )}
          {!!errorResponse.length && (
            <small className="block text-rose-500 mt-4">{errorResponse}</small>
          )}
        </>
      </Card>
    </>
  )
}

export default PrivateKey;