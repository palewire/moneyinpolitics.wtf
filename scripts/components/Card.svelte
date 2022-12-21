<script>
  import Share from "svelte-material-icons/Share.svelte";
  import Flag from "svelte-material-icons/Flag.svelte";

  const slugify = (str) => str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');

  /**
   * @type {string}
   */
   export let word;
  /**
   * @type {string}
   */
   export let type;
  /**
   * @type {Array<any>}
   */
   export let definitionList;
</script>

<div class="card">
    <div class="card--headline"><dt class="word"><a href="/{ slugify(word) }/">{ word }</a></dt> <span class="card--type">{ type }</span></div>
    <div class="card--body">
      <dd class="card--definition-list">
        <div class="card--definition">
          <div class="card--definition-text"><sup>1</sup> { definitionList[0].text }</div>
        </div>
      </dd>
    </div>
    <div class="card--actions">
      <div class="card--actions-border">
      <div class="card--action-item card--expand"><a href="/{ slugify(word) }/">Expand</a></div>
      <div class="card--supplemental">
        <div class="card--action-item card--flag"><Flag size=15 /></div>
        <div class="card--action-item card--share"><Share size=15 /></div>
      </div>
      </div>
    </div>
</div>