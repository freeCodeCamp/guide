import React from 'react';
import Media from 'react-bootstrap/lib/Media';

import {
  iconSkeleton,
  textSkeleton,
  skeleton
} from '../../../css/ResultSkeleton.module.css';
import {
  searchResults
} from '../../../css/SearchPage.module.css';

function ResultsSkeleton() {
  const text = new Array(145).join('x ');
  const title = new Array(16).join('x');
  // create an array of four indexes, 
  // the contructor method does not work for this
  const results = [1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => {
          return (
            <Media key={ i }>
              <Media.Left align='middle'>
                <div className={ `${iconSkeleton} ${skeleton}` } />
              </Media.Left>
              <Media.Body>
                <Media.Heading
                  className={ `${textSkeleton} ${skeleton}` }
                  >
                  { title }
                </Media.Heading>
                <p className={ `${textSkeleton} ${skeleton}` }>{ text }</p>
              </Media.Body>
            </Media>
          );
        });
  return (
    <div className={ searchResults }>
      { results }
    </div>
  );
}

export default ResultsSkeleton;
