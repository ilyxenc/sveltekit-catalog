<script>
    import Menu from "../components/menu.svelte";
    let active = 'About'
</script>

<svelte:head>
    <title>About</title>
</svelte:head>
<Menu {active} />
<div class="px-4 py-5 my-5 text-center">
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-4">Little catalog with client side filtering and routing as example</p>
    </div>
  </div>