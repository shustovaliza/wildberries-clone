const searchInputName = ('search-input');

export class SearchForm {
    constructor({ onProductsSearch, onClearSearch }) {
        this.searchForm = document.getElementById('search__id');
        this.searchRequest = document.getElementById('goods__text');
        this.clearSearchButton = document.getElementById('clear-search-button');

        this.onProductsSearch = onProductsSearch;
        this.onClearSearch = onClearSearch;

        this.searchForm.addEventListener('submit', this.onSearchFormSubmit);
        this.clearSearchButton.addEventListener('click', this.onClearSearch);
    }

    onSearchFormSubmit = (event) => {
        event.preventDefault();
        const { value } = this.searchForm.elements[searchInputName];

        const formattedValue = value.trim().toLowerCase();

        const formattedValueToUpper = formattedValue[0].toUpperCase() + formattedValue.slice(1);

        if (formattedValueToUpper) {
            this.onProductsSearch(formattedValueToUpper);
        }
    }
}
