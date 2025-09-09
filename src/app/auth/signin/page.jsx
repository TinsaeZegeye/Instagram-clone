import { getProviders } from "next-auth/react"
import Header from "../../../../components/Header"
import SignInButtons from "../../../../components/SignInButton"

export default async function SignInPage() {
  const providers = await getProviders()

  return (
    <>
      <Header/>
      <SignInButtons providers={providers} />
    </>
  )
}
