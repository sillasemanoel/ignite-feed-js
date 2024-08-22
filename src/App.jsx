import { Header } from "./components/header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import styles from "./App.module.css";
import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/sillasemanoel.png",
      name: "Sillas Emanoel",
      role: "Full Stack Next.js Developer",
    },
    content: [
      { type: "paragraph", content: "Olá pessoal 👋" },
      {
        type: "paragraph",
        content:
          "Estou animado em compartilhar que concluí um projeto incrível no meu portfólio. Este projeto foi desenvolvido com foco em Código Limpo e Programação Declarativa, seguindo as melhores práticas para garantir manutenibilidade e clareza. 🚀",
      },
      { type: "link", content: "https://github.com/sillasemanoel" },
    ],
    publishedAt: new Date("2024-08-18 23:59:59"),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
