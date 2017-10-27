import React from 'react';
import Helmet from 'react-helmet';

function Index() {
  return (
    <div>
      <Helmet>
        <title>freeCodeCamp Guide</title>
      </Helmet>
      <h2>freeCodeCamp Guide</h2>
      <p>
        {
          'Website ini penuh dengan artikel tentang segala hal yang berhubungan dengan '+
          'pemrograman Anda dapat menggunakan bilah penelusuran di atas untuk menemukan sesuatu '+
          'Anda ingin belajar tentang, atau gunakan navigasi untuk mengeksplorasi' +
          'isinya'
        }
      </p>
      <p>There are articles on:</p>
        <ul>
          <li>SQL</li>
          <li>Mathematics</li>
          <li>JavaScript</li>
          <li>Bootstrap</li>
          <li>Git</li>
          <li>and a whole lot more</li>
        </ul>
        <h3>Not sure where to start?</h3>
        <p>
          {
            'If you want to learn programming but you\'re not sure where to ' +
            'start, check out '
          }
          <a
            href='https://freecodecamp.org'
            rel='nofollow'
            target='_blank'
            >
            freeCodeCamp.org
          </a>
          {
            '. It has a curriculum that starts from zero and helps you learn' +
            ' to code.'
          }
        </p>
        <h3>Contribute to the Guide</h3>
        <p>
          {
            'This site and the articles on it are '
          }
          <a
            href='https://github.com/freeCodeCamp/guides'
            rel='nofollow'
            target='_blank'
            >
            open source
          </a>
          {
            '. Your help in making it better is greatly appreciated!'
          }
        </p>
        <hr />
        <p>Happy coding!</p>
    </div>
  );
}

Index.displayName = 'IndexPage';

export default Index;
