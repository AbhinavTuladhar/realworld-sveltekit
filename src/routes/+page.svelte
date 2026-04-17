<script lang='ts'>
  const { data } = $props();
</script>

<div>
  <pre>
    {JSON.stringify(data, null, 2)}
  </pre>
</div>