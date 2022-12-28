<script>
  import { writable, derived } from 'svelte/store';
  import Card from './Card.svelte'; 

  /**
   * @type {Array<any>}
   */
   export let dictionary;

  export const term = writable('');
  export const items = writable(dictionary);
  export const filtered = derived(
    [term, items], 
    ([$term, $items]) => $items.filter(x => x.word.toLowerCase().includes($term.toLowerCase()))
  );

  let val = '';
  $: term.set(val);
</script>

<div class="search">
  <input bind:value={val} type="text" placeholder="Search a word...">
</div>

<dl class="card-list">
  {#each $filtered as obj}
    <Card word={obj.word} type={obj.type} definitionList={ obj.definition_list }></Card>
  {/each}
</dl>