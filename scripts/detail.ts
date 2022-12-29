import { json } from 'd3-fetch';

import CardList from './components/CardList.svelte';

if (navigator.share) {
  const btn = document.getElementById('card--share')!;
  btn.classList.remove('display-none');
  const a = btn.getElementsByTagName('a')[0];
  a.addEventListener('click', function (e) {
    const url = window.location.href;
    navigator.share({ url });
  });
}

const url = '/api/dictionary.json';
const target = document.getElementById('card-container')!;
json(url).then(function (dictionary) {
  new CardList({
    target,
    props: {
      dictionary,
      displayAll: false,
    },
  });
});
