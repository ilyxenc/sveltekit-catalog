<script>
	import Menu from '../components/menu.svelte';
	import { catalog } from '../stores/catalog';

	let active = 'Home';

    let searchTerm = '';
    let filteredCatalog = [];

    $: {
        if (searchTerm) {
            filteredCatalog = $catalog.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
        } else {
            filteredCatalog = [...$catalog]
        }
    }
</script>

<svelte:head>
	<title>Catalog</title>
</svelte:head>
<Menu {active} />
<h1 class="fw-light text-center">Catalog</h1>
<div class="container py-3 px-4 px-lg-5 search">
	<form class="w-100 me-3">
		<input type="text" class="form-control" placeholder="Search..." bind:value={searchTerm} />
	</form>
</div>
<div class="container px-4 px-lg-5">
	<div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-4 row-cols-xl-4 justify-content-center">
		{#each filteredCatalog as { id, name, price, image }}
			<a class="col mb-5 link" href={`/catalog/${id}`}>
				<div class="card h-100">
					<img class="card-img-top" src={image} alt="..." />
					<div class="card-body p-2">
						<div class="text-center">
                            <p class="">{name}</p>
							<h6 class="fw-bolder">${price}</h6>
						</div>
					</div>
				</div>
			</a>
		{/each}
	</div>
</div>

<style>
	.card {
        color: #000000;
	}

	.form-control:focus {
		border: 1px solid #000000;
		box-shadow: none;
	}

    .link {
        text-decoration: none !important;
    }

	h1 {
		margin: 0 auto;
	}

    .search {
        padding-bottom: 3rem!important;
    }
</style>
