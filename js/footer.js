document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('.toggle-link').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('data-target');
      const content = document.getElementById(targetId);

      // Check if element exists
      if (!content) {
        console.error(`Target element with ID "${targetId}" not found`);
        return;
      }

      // Hide all content boxes first
      document.querySelectorAll('.toggle-content').forEach(el => {
        el.style.display = 'none';
      });

      // Show the selected content
      content.style.display = 'block';
    });
  });
});


  document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.toggle-link');

    links.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('data-target');
        const targetEl = document.getElementById(targetId);

        // Check if it's currently visible
        const isVisible = targetEl.style.display === 'block';

        // Hide all toggle-content sections
        document.querySelectorAll('.toggle-content').forEach(el => {
          el.style.display = 'none';
        });

        // Toggle visibility of the clicked section
        if (!isVisible) {
          targetEl.style.display = 'block';
        }
      });
    });
  });
</script>

