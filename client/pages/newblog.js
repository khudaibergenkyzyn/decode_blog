import Header from './partials/header'
import BlogForm from './components/blogForm'
import BlogFormHeader from './components/blogFormHeader'
export default function NewBlog() {
  return (
    <div>
      <Header/>
      <section className="container page">
        <div className="page-block">
          <BlogFormHeader/>
          <BlogForm/>
        </div>
      </section>
    </div>
  )
}
