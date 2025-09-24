document.addEventListener('DOMContentLoaded', function() {
  // Collapse functionality
  initCollapse();
  
  // Mobile navigation
  initMobileNav();
});

// Collapse functionality - pure CSS + JS
function initCollapse() {
  const collapseButtons = document.querySelectorAll('[data-toggle="collapse"]');
  
  collapseButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      const targetId = this.getAttribute('data-target');
      const target = document.querySelector(targetId);
      
      if (!target) return;
      
      // Get entry key for mutual exclusivity
      const entryKey = targetId.split('_')[0].substring(1);
      
      // Close other collapse elements in the same entry (mutual exclusivity)
      const otherButton = targetId.includes('_abstract') 
        ? document.querySelector(`[data-target="#${entryKey}_bibtex"]`)
        : document.querySelector(`[data-target="#${entryKey}_abstract"]`);
      
      if (otherButton) {
        const otherTarget = document.querySelector(otherButton.getAttribute('data-target'));
        if (otherTarget && otherTarget.classList.contains('show')) {
          otherTarget.classList.remove('show');
        }
      }
      
      // Toggle current element
      target.classList.toggle('show');
    });
  });
}

// Mobile navigation - pure JS
function initMobileNav() {
  const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
  const mobileNavMenu = document.querySelector('.mobile-nav-menu');
  
  if (!mobileNavToggle || !mobileNavMenu) return;
  
  // Toggle mobile navigation
  mobileNavToggle.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    mobileNavMenu.classList.toggle('show');
  });
  
  // Close mobile nav when clicking outside
  document.addEventListener('click', function(event) {
    const mobileNav = document.querySelector('.mobile-nav');
    if (!mobileNav.contains(event.target) && mobileNavMenu.classList.contains('show')) {
      mobileNavMenu.classList.remove('show');
    }
  });
  
  // Close mobile nav when clicking on links
  const mobileNavLinks = mobileNavMenu.querySelectorAll('a');
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', function() {
      mobileNavMenu.classList.remove('show');
    });
  });
}
