<script>
    import Menu from "../components/menu.svelte";
    import { catalog } from "../stores/catalog";

    let active = "Home";

    console.log(catalog);
</script>

<svelte:head>
    <title>Catalog</title>
</svelte:head>
<Menu {active} />