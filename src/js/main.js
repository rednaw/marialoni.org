// Import dependencies
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import $ from 'jquery'

// Make jQuery available globally for compatibility
window.$ = window.jQuery = $

// Collapsible sections functionality
// Ensure only one section (abstract or bibtex) is open at a time per entry
document.addEventListener('DOMContentLoaded', function() {
  const collapseButtons = document.querySelectorAll('[data-bs-toggle="collapse"]');
  
  collapseButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      const targetId = this.getAttribute('data-bs-target');
      const entryKey = targetId.split('_')[0].substring(1);
      const otherButton = document.querySelector(
        targetId.includes('_abstract') 
          ? `[data-bs-target="#${entryKey}_bibtex"]` 
          : `[data-bs-target="#${entryKey}_abstract"]`
      );
      if (otherButton) {
        const otherTarget = document.querySelector(otherButton.getAttribute('data-bs-target'));
        if (otherTarget && otherTarget.classList.contains('show')) {
          otherButton.click();
        }
      }
    });
  });
});
