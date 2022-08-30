import Header from './partials/header'
import SignupForm from './components/signupForm'

export default function Home() {
  return (
    <div>
      <Header/>
      <section className="container page">
        <SignupForm/>
      </section>
    </div>
  )
}
