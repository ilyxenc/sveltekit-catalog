<script>
    export let active;

    let pages = [
        {
            'page': 'Home',
            'link': '/',
        },
        {
            'page': 'About',
            'link': '/about'
        }
    ]
</script>

<div class="container">
	<header class="d-flex justify-content-center py-3">
		<ul class="nav nav-pills">
            {#each pages as { page, link } }
            <li class="nav-item"><a href={link} class={`nav-link${(active === page) ? ' active' : ''}`}>{page}</a></li>    
            {/each}
		</ul>
	</header>
</div>

<style>
    .active {
        background-color: #000000 !important;
    }

    .nav-link {
        color: #000000;
    }
</style>