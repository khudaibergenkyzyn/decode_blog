import Header from './partials/header'
import SigninForm from './components/signinForm'

export default function Home() {
  return (
    <div>
      <Header/>
      <section className="container page">
        <SigninForm/>
      </section>
    </div>
  )
}
