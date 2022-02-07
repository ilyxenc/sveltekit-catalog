<script context="module">
	export function load({ params }) {
		const pageId = params.id;

		return {
			props: { pageId }
		};
	}
</script>

<script>
	import { catalog } from '../../stores/catalog';
	import Menu from '../../components/menu.svelte';

	export let pageId;

	let item = $catalog.filter((item) => item.id == pageId)[0];
</script>

<Menu />
<section>
	<div class="container px-4 px-lg-5">
		<a href="/" class="icon-link">
            &lt; Back
		</a>
	</div>
</section>
<section class="py-5">
	<div class="container px-4 px-lg-5 my-5">
		<div class="row gx-4 gx-lg-5 align-items-center">
			<div class="col-md-6">
				<img class="card-img-top mb-5 mb-md-0" src={item.image} alt="" />
			</div>
			<div class="col-md-6">
				<h1 class="display-5 fw-bolder">{item.name}</h1>
				<div class="fs-5 mb-5">
					<span>${item.price}</span>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
    a {
        color: #000000;
    }

    .py-5 {
        padding-top: 0 !important;
    }
</style>