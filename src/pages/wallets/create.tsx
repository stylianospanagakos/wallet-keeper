import { FormEvent, useState, useContext } from "react";
import {useNavigate} from "react-router-dom";
import Card from "../../components/Card";
import Alert from "../../components/Alert";
import Input from "../../components/Input";
import Button from "../../components/Button";
import {hasTitleError, hasPasswordError} from "../../libs/helpers";
import {WalletContext} from "../../providers/WalletContextProvider"
import BackHeader from "../../components/BackHeader";

function Create() {
  const navigate = useNavigate();
  const {addWallet} = useContext(WalletContext);
  const [title, setTitle] = useState<string>('');
  const [titleError, setTitleError] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');
  const [rePassword, setRePassword] = useState<string>('');
  const [rePasswordError, setRePasswordError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false)

  function handleTitleChange(event: FormEvent) {
    const value = (event.currentTarget as HTMLInputElement).value
    setTitleError(hasTitleError(value));
    setTitle(value);
  }

  function handlePasswordChange(event: FormEvent) {
    const value = (event.currentTarget as HTMLInputElement).value
    setPassword(value)
    setPasswordError(hasPasswordError(value))
    if (rePassword.length && rePasswordError.length) {
      setRePasswordError(hasPasswordError(rePassword, value))
    }
  }

  function handleRePasswordChange(event: FormEvent) {
    const value = (event.currentTarget as HTMLInputElement).value
    setRePassword(value)
    setRePasswordError(hasPasswordError(value, password))
  }

  function handleFormSubmission(event: FormEvent) {
    event.preventDefault()

    const titleError = hasTitleError(title),
      passwordError = hasPasswordError(password),
      rePasswordError = hasPasswordError(rePassword, password);

    if (titleError.length || passwordError.length || rePasswordError.length) {
      setTitleError(titleError)
      setPasswordError(passwordError)
      setRePasswordError(rePasswordError)
    } else {
      setLoading(true)
      addWallet(title, password)
      navigate('/')
    }
  }

  return (
    <>
      <BackHeader/>
      <Card>
        <h2 className="font-bold text-2xl tracking-wider text-blue-500">Keepr</h2>
        <div className="text-start mt-5 space-y-8">
          <Alert type="danger">Make sure you memorize the wallet's password.</Alert>
          <form className="space-y-5" onSubmit={handleFormSubmission}>
            <Input
              id="titleField"
              placeholder="Enter title"
              value={title}
              onChange={handleTitleChange}
              error={titleError}
              disabled={loading}
            />
            <Input
              id="passwordField"
              placeholder="Enter password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              error={passwordError}
              disabled={loading}
            />
            <Input
              id="rePasswordField"
              placeholder="Re-type password"
              type="password"
              value={rePassword}
              onChange={handleRePasswordChange}
              error={rePasswordError}
              disabled={loading}
            />
            <div className="text-right">
              <Button loading={loading}>Create Wallet</Button>
            </div>
          </form>
        </div>
      </Card>
    </>
  )
}

export default Create;