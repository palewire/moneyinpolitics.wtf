<script>
  import { writable, derived } from 'svelte/store';
  import AboutCard from './AboutCard.svelte';
  import Card from './Card.svelte'; 

  /**
   * @type {Array<any>}
   */
   export let dictionary;
   export let displayAll = true;

  const term = writable('');
  const items = writable(dictionary);
  const filtered = derived(
    [term, items], 
    ([$term, $items]) => $items.filter(x => x.word.toLowerCase().includes($term.toLowerCase()))
  );
  const cardList = Array.from(document.getElementsByClassName('card--big'));

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

<dl class="card-list {hide ? 'display-none': ''}">
  {#each $filtered as obj}
    <Card word={obj.word} type={obj.type} definitionList={ obj.definition_list }></Card>
  {/each}
  <AboutCard></AboutCard>
</dl>