<script>
  import Share from "svelte-material-icons/Share.svelte";
  import Flag from "svelte-material-icons/Flag.svelte";
  import "share-api-polyfill";

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

  const url = `/${slugify(word)}/`;
  const handleShare = function () {
    navigator.share({
      url: `https://moneyinpolitics.wtf${url}`,
    }, {
      skype: false,
      telegram: false,
      pinterest: false,
    })
    .then( _ => console.log('Yay, you shared it :)'))
    .catch( error => console.log('Oh noh! You couldn\'t share it! :\'(\n', error));
  };
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
      <div class="card--action-item card--expand"><a href="{ url }">Expand</a></div>
      <div class="card--supplemental">
        <div class="card--action-item card--flag"><a href="https://github.com/palewire/moneyinpolitics.wtf/issues/new?assignees=palewire&labels=bug&template=flag-an-error.yaml&title=Error%20with%20{ encodeURIComponent(word) }&word={ encodeURIComponent(word) }"><Flag size=15 /></a></div>
        <div class="card--action-item card--share"><a on:click={handleShare}><Share size=15 /></a></div>
      </div>
      </div>
    </div>
</div>
