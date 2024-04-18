
    // Function to fetch car brands
    function fetchCarBrands() {
      // Fetch data using Promise
      return fetch('https://parallelum.com.br/fipe/api/v1/carros/marcas')
        .then(response => {
          // Check if response is successful
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
          // Parse JSON response
          return response.json();
        })
        .then(data => {
          // Return brands array
          return data;
        })
        .catch(error => {
          console.error('Error fetching data:', error);
          // Return empty array in case of error
          return [];
        });
    }

    // Function to display car brands
    function displayCarBrands() {
      // Get reference to brand list
      const brandList = document.querySelector('.brand-list');

      // Fetch car brands
      fetchCarBrands()
        .then(brands => {
          // Iterate over brands and create list items
          brands.forEach(brand => {
            const brandItem = document.createElement('li');
            brandItem.classList.add('brand-item');
            brandItem.textContent = brand.nome;
            // Append brand item to brand list
            brandList.appendChild(brandItem);
          });
        });
    }

    // Call function to display car brands when DOM content is loaded
    document.addEventListener('DOMContentLoaded', displayCarBrands);
  