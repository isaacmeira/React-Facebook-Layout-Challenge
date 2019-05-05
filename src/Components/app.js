import React, { Component } from 'react';

import Header from './header';
import Posts from './post';

export default class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        name: 'Isaac Meira',
        avatar: 'https://avatars0.githubusercontent.com/u/43460570?s=460&v=4',
        time: 'há 20 min',
        body:
          'Desafio 1 módulo react: Construir uma interface semelhante ao facebook, usando Babel, Webpack e Webpack Dev Server, além disso, utilizar as ferramentas ESLint, EditorConfig e Prettier. Gostaria Também de agradecer aos que me inspiraram a seguir essa jornada fazendo uma pequena referência abaixo. \n Obrigado !',
      },
      {
        id: 3,
        name: 'RocketSeat',
        avatar: 'https://avatars0.githubusercontent.com/u/28929274?s=200&v=4',
        time: 'há 45 min',
        body:
          'Phasellus luctus, eros vel bibendum ultricies, ex ligula pellentesque felis, ac faucibus tellus tortor at neque. Suspendisse facilisis tristique mi facilisis eleifend. Praesent ultricies et tellus eget porta. Donec semper nisi vel augue semper, vel vehicula augue tristique. Quisque vestibulum leo vitae ipsum pharetra, eget finibus tortor tincidunt. Phasellus ac lectus est.  ',
      },
      {
        id: 2,
        name: 'Filipe Deschamps',
        avatar: 'https://avatars3.githubusercontent.com/u/4248081?s=460&v=4',
        time: '1 hora atrás',
        body:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras commodo ultrices velit, ut faucibus arcu consequat eu. Morbi ornare neque dapibus, sollicitudin elit sed, sollicitudin neque. DOPAMINA DOPAMINA DOPAMINA !',
      },
      {
        id: 4,
        name: 'Guilherme Jabur',
        avatar: 'https://avatars1.githubusercontent.com/u/13947203?s=460&v=4',
        time: '2 horas atrás',
        body:
          'Suspendisse congue purus at sapien congue viverra. Vestibulum maximus porttitor risus vitae volutpat. Quisque sit amet est eget quam mollis eleifend ac eget ligula. In at accumsan risus. Integer quis mi scelerisque, viverra elit in, tempor quam. Donec elementum vulputate ornare. ',
      },
    ],
  };

  render() {
    const { posts } = this.state;
    return (
      <div>
        <Header />
        <div className="postContainer">
          {posts && posts.map(post => <Posts key={post.id} data={post} />)}
        </div>
      </div>
    );
  }
}
