import { json } from 'd3-fetch';

import CardList from './components/CardList.svelte';

const url = '/api/dictionary.json';

json(url).then(function (dictionary) {
  new CardList({
    target: document.getElementById('card-container'),
    props: {
      dictionary,
    },
  });
});
