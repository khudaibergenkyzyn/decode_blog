import Header from './partials/header'
import MainContent from './components/mainContent'
import Catgories from './components/categories'

export default function Home() {
  return (
    <div>
      <Header/>
      <section className="container page">
        <MainContent/>
        <Catgories/>
      </section>
    </div>
  )
}
