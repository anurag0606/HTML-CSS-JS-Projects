console.log("Hello World!");

// sign and sign up form
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('authModal');
    const signInBtn = document.getElementById('signInBtn');
    const closeModal = document.querySelector('.close-modal');
    const showSignup = document.getElementById('showSignup');
    const showLogin = document.getElementById('showLogin');
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');

    // Check URL parameters for direct sign-in
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('auth') === 'signin') {
        modal.style.display = 'block';
        loginForm.style.display = 'block';
        signupForm.style.display = 'none';
    }

    // Open modal when clicking Sign In button
    signInBtn.addEventListener('click', (e) => {
        e.preventDefault();
        modal.style.display = 'block';
        loginForm.style.display = 'block';
        signupForm.style.display = 'none';
    });

    // Close modal
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Switch between login and signup forms
    showSignup.addEventListener('click', () => {
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
    });

    showLogin.addEventListener('click', () => {
        signupForm.style.display = 'none';
        loginForm.style.display = 'block';
    });
});

// index.html redirect to catelog.html
document.addEventListener("DOMContentLoaded", function () {
  // Modify the form submission in the main page to redirect to catalog
  const emailForm = document.querySelector("form");
  if (emailForm) {
    emailForm.addEventListener("submit", function (e) {
      e.preventDefault();
      window.location.href = "catalog.html";
    });
  }

  // Handle category tabs
  const tabs = document.querySelectorAll(".tab");
  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      // Remove active class from all tabs in the same category
      const categoryTabs = this.parentElement.querySelectorAll(".tab");
      categoryTabs.forEach((t) => t.classList.remove("active"));

      // Add active class to clicked tab
      this.classList.add("active");

      // Here you would typically fetch and display content based on the selected category
      loadCategoryContent(this.textContent.toLowerCase());
    });
  });
});

function loadCategoryContent(category) {
  // Example content - In a real application, this would come from an API
  const contentGrid = document.querySelector(`#${category} .content-grid`);
  if (!contentGrid) return;

  // Sample data structure
  const sampleContent = [
    { title: "Title 1", image: "path/to/image1.jpg" },
    { title: "Title 2", image: "path/to/image2.jpg" },
    // Add more items as needed
  ];

  contentGrid.innerHTML = sampleContent
    .map(
      (item) => `
        <div class="content-item">
            <img src="${item.image}" alt="${item.title}">
            <div class="info">
                <h3>${item.title}</h3>
            </div>
        </div>
    `
    )
    .join("");
}


document.addEventListener('DOMContentLoaded', function() {
    // Email form submission
    const emailForm = document.getElementById('emailForm');
    if (emailForm) {
        emailForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('email').value;
            if (email) {
                // Store email if needed
                localStorage.setItem('userEmail', email);
                // Redirect to catalog page
                window.location.href = 'catalog.html';
            }
        });
    }

    // Login/Signup Modal functionality
    // ...existing modal code...
});

document.addEventListener('DOMContentLoaded', function() {
    // Handle email form submission
    const emailForm = document.getElementById('emailForm');
    if (emailForm) {
        emailForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('email').value;
            if (email) {
                // Store email in localStorage if needed
                localStorage.setItem('userEmail', email);
                // Redirect to catalog page
                window.location.href = 'catalog.html';
            }
        });
    }

    // Handle login form submission
    const loginForm = document.querySelector('#loginForm form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add your login validation here
            window.location.href = 'catalog.html';
        });
    }

    // Handle signup form submission
    const signupForm = document.querySelector('#signupForm form');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add your signup validation here
            window.location.href = 'catalog.html';
        });
    }
});