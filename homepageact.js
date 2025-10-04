    function filterEntries(category) {
        const entries = document.querySelectorAll('.entry');
        entries.forEach(entry => {
            if (category === 'all' || entry.getAttribute('data-category') === category) {
             entry.style.display = 'block';
            } else {
             entry.style.display = 'none';
            }
        });
        }

    // Show all by default
    filterEntries('all');

        const 

    function testEntries() {

    }