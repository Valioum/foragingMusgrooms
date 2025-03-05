const cards = document.querySelectorAll('.mushroom-guide .card');

const seasonFilter = document.querySelector('#season');
const edibleFilter = document.querySelector('#edible');

const currentFilter = {
    season: 'all',
    edible: 'all'
}; // default filter when the page loads

seasonFilter.addEventListener('change', updateFilter);
edibleFilter.addEventListener('change', updateFilter);

function updateFilter(e) {
    const filterType = e.target.name;
    currentFilter[filterType] = e.target.value;

    console.log(currentFilter);
} // logs the current filter when a filter is changed

function filterCards() {
    cards.forEach(card => {
        const season = card.getAttribute('data-season');
        const edible = card.getAttribute('data-edible');

        if ((currentFilter.season === 'all' || currentFilter.season === season) && (currentFilter.edible === 'all' || currentFilter.edible === edible)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}
