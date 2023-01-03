import { Header } from './components/Header/Header'
import styles from './App.module.css'
import { Post } from './components/Post/Post'
import { Sidebar } from './components/Sidebar/Sidebar'
function App() {

  const posts = [
    {
      id: 1,
      author: {
        avatarUrl: "https://github.com/GotWill.png",
        name: "Willian Pereira",
        role: "Developer"
      },
      content: [
        {type: "paragraph", content: "Fala galeraa 👋"},
        {type: "paragraph", content:   "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
        {type: "link", content: "👉  jane.design/doctorcare"},
      ],
      publishedAt: new Date("2023-01-02 20:00:00")
    },
    {
      id: 2,
      author: {
        avatarUrl: "https://github.com/jeymes.png",
        name: "Jeymes",
        role: "Developer"
      },
      content: [
        {type: "paragraph", content: "Fala galeraa 👋"},
        {type: "paragraph", content:   "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
        {type: "link", content: "👉  jane.design/doctorcare"},
      ],
      publishedAt: new Date("2022-05-10 20:00:00")
    },
  ]
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar size={20}/>
        <main>
          {posts.map((post) => (
            <Post
            key={post.id}
              author={post.author.name}
              role={post.author.role}
              img={post.author.avatarUrl}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </div>

  )
}

export default App
