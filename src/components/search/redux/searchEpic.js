import { Observable } from 'rx';
import { combineEpics } from 'redux-epic';
import axios from 'axios';

import { types, updateSearchResults, updateTypeAheads } from './';

const requestUrl = 'http://freecodecamp.duckdns.org';
const nullAction = { type: 'null' };

function searchTermEpic(actions$, { getState }) {
  return actions$
    .filter(({ type }) => type === types.updateSearchTerm)
    .flatMap(() => {
      const { results } = getState().search;
      if (results.length) {
      updateSearchResults([]);
    }
      return Observable.of(nullAction);
    });
}

function searchEpic(actions$, { getState }) {
  return actions$
    .filter(({ type }) => type === types.fetchSearchResults)
    .flatMap(() => {
      const { searchTerm } = getState().search;
      return axios.get(`${requestUrl}/search?q=${searchTerm}`)
        .then(response => {
          return updateSearchResults(response.data);
        })
        .catch(err => {
          console.error(err);
          return updateSearchResults([]);
        });
    });
}

function typeAheadEpic(actions$) {
  return actions$
    .filter(({ type }) => type === types.fetchTypeAheads)
    .flatMap(() => {
      return axios.get(`${requestUrl}/type-ahead`)
        .then(response => {
          const typeAheads = response.data
            .reduce((accu, current) => [ ...accu, current.title ], []);
          return updateTypeAheads(typeAheads);
        })
        .catch(err => {
          console.error(err);
          return Observable.of(nullAction);
        });
    });
}

export default combineEpics(searchEpic, searchTermEpic, typeAheadEpic);
