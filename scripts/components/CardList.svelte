<script>
  import { writable, derived } from 'svelte/store';
  import AboutCard from './AboutCard.svelte';
  import RequestCard from './RequestCard.svelte';
  import Card from './Card.svelte'; 

  /**
   * @type {Array<any>}
   */
   export let dictionary;
   export let displayAll = true;

  // Sort alphabetically
  const sortByName = (a, b) => {
    const aName = a.word.toLowerCase();
    const bName = b.word.toLowerCase();
    if (aName < bName) {
      return -1;
    }
    if (aName > bName) {
      return 1;
    }
    return 0;
  };
  dictionary.sort(sortByName);

  const term = writable('');
  const items = writable(dictionary);
  const filtered = derived(
    [term, items], 
    ([$term, $items]) => $items.filter(x => x.word.toLowerCase().includes($term.toLowerCase()))
  )
  const cardList = Array.from(document.getElementsByClassName('card--detail'));

  let val = '';
  $: term.set(val);
  $: hide = ($filtered.length == 0 || $filtered.length == $items.length) && !displayAll;
  $: {
    if ($term) {
      cardList.forEach((e) => e.classList.add('display-none'));
    } else {
      cardList.forEach((e) => e.classList.remove('display-none'));
    }
  }
</script>

<div class="search">
  <input bind:value={val} type="text" placeholder="Search a word...">
</div>

<section class="card-list {hide ? 'display-none': ''}">
  {#each $filtered as obj, idx}
    <Card word={obj.word} type={obj.type} definitionList={obj.definition_list}></Card>
    {#if idx == 9 && !$term}
      <AboutCard></AboutCard>
    {/if}
  {/each}
  {#if $term && $filtered.length == 0}
    <RequestCard word={$term}></RequestCard>
  {/if}
</section>