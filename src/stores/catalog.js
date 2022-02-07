import { writable } from "svelte/store";

const SITEURL = 'http://localhost:3000/static/'

export const catalog = writable([]);

const fetchCatalog = async () => {
    const url = `https://raw.githubusercontent.com/ilyxenc/sveltekit-catalog/main/static/catalog.json`;
    const res = await fetch(url);
    const data = await res.json();

    const loadedCatalog = data.map((data) => {
        return {
            id: data.id,
            name: data.name,
            price: data.price,
            image: `${SITEURL}images/${data.id}.jpeg`,
        }
    });

    catalog.set(loadedCatalog);
}
fetchCatalog();