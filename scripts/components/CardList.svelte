<script>
  import Card from './Card.svelte'; 

  /**
   * @type {Array<Object>}
   */
   export let dictionary;
</script>

<section class="card-list">
  {#each dictionary as obj}
    <Card word={obj.word} type={obj.type}></Card>
  {/each}
</section>