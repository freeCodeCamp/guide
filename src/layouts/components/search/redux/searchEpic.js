import { Observable } from 'rx';
import { combineEpics } from 'redux-epic';
import axios from 'axios';

import {
  fetchSearchResults,
  types,
  updateSearchResults
} from './';

const requestUrl = 'https://freecodecamp.duckdns.org';
const nullAction = { type: 'null' };

function searchTermEpic(actions$, { getState }) {
  const Xms = 400;
  const source$ = actions$
    .filter(({ type }) => type === types.updateSearchTerm);

  return Observable.merge(
    source$.debounce(Xms),
    source$.throttle(Xms).distinctUntilChanged()
    )
    .flatMap(() => {
      const { searchTerm } = getState().search;
      if (searchTerm.length > 2) {
        return Observable.of(fetchSearchResults());
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

export default combineEpics(searchEpic, searchTermEpic);
