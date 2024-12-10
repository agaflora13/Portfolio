document.addEventListener('DOMContentLoaded', function () {
    // Get all buttons that trigger the modal
    const viewDetailsButtons = document.querySelectorAll('.view-details');

    // Loop over each button and add an event listener
    viewDetailsButtons.forEach(button => {
        button.addEventListener('click', function () {
            const modalTitle = this.getAttribute('data-title');
            const modalDescription = this.getAttribute('data-description');
            const modalImageSrc = this.getAttribute('data-image');
            const modalTitleElement = document.querySelector('#projectModal .modal-title');
            const modalDescriptionElement = document.querySelector('#projectModal #project-description');
            const modalImageElement = document.querySelector('#projectModal #project-image')
            // Set the modal title dynamically
            modalTitleElement.textContent = modalTitle;

            // Set the modal description using innerHTML so <br> tags are processed
            modalDescriptionElement.innerHTML = modalDescription;

            // Set the image dynamically
            modalImageElement.src = modalImageSrc;
            $('#projectModal').modal('show');  // Explicitly show the modal after content update
        });
    });
    // Function to open the modal
 function openModal(modalNumber) {
    const modal = document.getElementById(`educationModal${modalNumber}`);
    modal.style.display = "block"; // Show the modal
  }
  
  // Function to close the modal
  function closeModal(modalNumber) {
    const modal = document.getElementById(`educationModal${modalNumber}`);
    modal.style.display = "none"; // Hide the modal
  }
  
  // Close modal if the user clicks outside of it
  window.onclick = function(event) {
    const modal = document.querySelectorAll('.modal');
    modal.forEach(modal => {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    });
  }
    // Get all filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');

    // Loop over each filter button and add an event listener
    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            const category = this.getAttribute('data-category');
            const portfolioItems = document.querySelectorAll('.portfolio-item');

            // Loop through all portfolio items
            portfolioItems.forEach(item => {
                // Get the data-category attribute of each portfolio item
                const itemCategory = item.getAttribute('data-category');

                // Check if the item matches the selected category
                if (category === 'all' || itemCategory === category) {
                    item.style.display = '';  // Show item
                } else {
                    item.style.display = 'none';  // Hide item
                }
            });
        });
    });
});
