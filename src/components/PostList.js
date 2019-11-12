import React, { Component } from 'react';

import Post from './Post';

import profile from '../assets/profile.jpg';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Julio Alcantara",
          avatar: profile
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: profile
            },
            content: "Diego Fernandes A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Jorge Cláudio",
          avatar: profile
        },
        date: "10 Ago 2019",
        content: "Mais um post.",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: profile
            },
            content: "É mesmo, concordo."
          },
          {
            id: 2,
            author: {
              name: "Augusto Magalhães",
              avatar: profile
            },
            content: "Segundo comentário."
          }
        ]
      },
      {
        id: 3,
        author: {
          name: "Jorge Cláudio",
          avatar: profile
        },
        date: "10 Ago 2019",
        content: "Postagem Postagem Postagem Postagem Postagem Postagem Postagem Postagem Postagem Postagem Postagem Postagem Postagem Postagem Postagem Postagem Postagem Postagem Postagem Postagem Postagem Postagem Postagem Postagem ",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: profile
            },
            content: "É mesmo, concordo."
          },
          {
            id: 2,
            author: {
              name: "Augusto Magalhães",
              avatar: profile
            },
            content: "Segundo comentário."
          }
        ]
      },
      {
        id: 4,
        author: {
          name: "Jorge Cláudio",
          avatar: profile
        },
        date: "10 Ago 2019",
        content: "Mais um post.",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: profile
            },
            content: "É mesmo, concordo."
          },
          {
            id: 2,
            author: {
              name: "Augusto Magalhães",
              avatar: profile
            },
            content: "Segundo comentário."
          }
        ]
      }
    ]
  }

  render() {
    return (
      <>
        {this.state.posts.map(post => <Post post={post} key={post.id} />)}
      </>
    )
  }
}

export default PostList;