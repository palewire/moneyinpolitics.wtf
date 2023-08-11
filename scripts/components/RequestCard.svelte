<script>
    export let word;
    $: url = `https://github.com/palewire/moneyinpolitics.wtf/issues/new?assignees=palewire&labels=enhancement&template=request-a-word.yaml&title=Request definition for ${word}`;
</script>

<div class="card card--about">
    <div class="card--headline"><a href="{url}">No results found</a></div>
    <div class="card--body">
      <div class="card--definition-list">
        <div class="card--definition">
          <div class="card--definition-text">Ask our experts to add a definition.</div>
        </div>
      </div>
    </div>
    <div class="card--actions">
      <div class="card--actions-border">
        <div class="card--action-item card--expand"><a aria-label="Make request" href="{url}">Make request</a></div>
      </div>
    </div>
</div>