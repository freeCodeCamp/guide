import { Observable } from 'rx';
import { combineEpics } from 'redux-epic';
import axios from 'axios';

import {
  fetchSearchResults,
  types,
  updateSearchResults
} from './';

let previousSearchTerm = '';
let Xms = 500;
const requestUrl = 'https://freecodecamp.duckdns.org';
const nullAction = { type: 'null' };

function searchTermEpic(actions$, { getState }) {
  const source$ = actions$
    .filter(({ type }) => type === types.updateSearchTerm);

  return Observable.merge(
    source$.debounce(Xms),
    source$.throttle(Xms).distinctUntilChanged()
    )
    .flatMap(() => {
      const { searchTerm } = getState().search;
      // if user is pressing backspace
      // increase debounce/throttle time
      if (searchTerm.length < previousSearchTerm.length) {
        Xms = 1000;
      } else {
        Xms = 500;
      }
      // if the search term is over 2 chars and
      // this is not a throttle/debounce echo
      if (
        searchTerm.length > 2 &&
        searchTerm.length !== previousSearchTerm.length
      ) {
        previousSearchTerm = searchTerm.slice(0);
        return Observable.of(fetchSearchResults());
      }
      previousSearchTerm = searchTerm.slice(0);
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
