import { useState } from 'react'
import { Post } from './components/Post'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

import './assets/global.css'
import styles from './App.module.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/Gabrielrioo.png',
      name: 'Gabriel Rio',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2023-05-29 10:35:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/leotuna.png',
      name: 'Leonardo Tuna',
      role: 'Software Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2022-06-02 12:34:00'),
  }
]

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
     <div className={styles.wrapper}>
      <Sidebar />
      <main>
        {
          posts.map(post => {
            return (
              <Post 
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })
        }
      </main>
     </div>
    </>
  )
}

