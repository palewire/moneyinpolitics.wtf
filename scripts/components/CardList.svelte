<script>
  import Card from './Card.svelte'; 

  /**
   * @type {Array<any>}
   */
   export let dictionary;
</script>

<div class="search">
  <input type="text">
</div>

<dl class="card-list">
  {#each dictionary as obj}
    <Card word={obj.word} type={obj.type} definitionList={ obj.definition_list }></Card>
  {/each}
</dl>