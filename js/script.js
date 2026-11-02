// CHOPPIES - Search Filter - FINAL
document.addEventListener('DOMContentLoaded', function() {
  const search = document.getElementById('searchInput');
  
  if (!search) return;

  search.addEventListener('input', function() {
    let word = this.value.toLowerCase();
    let items = document.querySelectorAll('.product-item');

    items.forEach(function(item) {
      if (item.textContent.toLowerCase().includes(word)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});
// CHOPPIES - Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.getElementById('close-lightbox');

// Click on any product image to enlarge
document.querySelectorAll('.product-item img').forEach(function(img) {
  img.style.cursor = 'pointer';
  img.addEventListener('click', function() {
    lightboxImg.src = this.src;
    lightbox.style.display = 'flex';
  });
});

// Close lightbox
closeBtn.addEventListener('click', function() {
  lightbox.style.display = 'none';
});

lightbox.addEventListener('click', function(e) {
  if (e.target === lightbox) {
    lightbox.style.display = 'none';
  }
});

// CHOPPIES - Enquiry Form Validation - FOR YOUR FORM
const enquiryForm = document.getElementById('enquiryForm');

if (enquiryForm) {
  enquiryForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let isValid = true;

    // Get values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const enquiryType = document.getElementById('enquiryType').value;
    const message = document.getElementById('message').value.trim();

    // Clear old errors
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('typeError').textContent = '';
    document.getElementById('messageError').textContent = '';
    document.getElementById('formSuccess').textContent = '';

    // Validate Name
    if (name.length < 2) {
      document.getElementById('nameError').textContent = 'Please enter full name (2+ letters)';
      isValid = false;
    }

    // Validate Email
    if (!email.includes('@') || !email.includes('.')) {
      document.getElementById('emailError').textContent = 'Enter a valid email like name@gmail.com';
      isValid = false;
    }

    // Validate Enquiry Type
    if (enquiryType === '') {
      document.getElementById('typeError').textContent = 'Please select enquiry type';
      isValid = false;
    }

    // Validate Message
    if (message.length < 10) {
      document.getElementById('messageError').textContent = 'Message must be at least 10 characters';
      isValid = false;
    }

    // If all good
    if (isValid) {
      document.getElementById('formSuccess').textContent = 'Thank you! Your Choppies enquiry has been sent successfully!';
      enquiryForm.reset();
    }
  });
}

// Tabs filter
document.querySelectorAll('.tab-btn').forEach(b=>{
 b.addEventListener('click', ()=>{
   document.querySelectorAll('.tab-btn').forEach(x=>x.classList.remove('active'));
   b.classList.add('active');
   // simple filter logic - you can filter by data-category
 });
});
// Modal
const modal = document.getElementById('productModal');
document.querySelectorAll('.product-card').forEach(card=>{
 card.addEventListener('click', ()=>{
   document.getElementById('modalTitle').innerText = card.querySelector('h3').innerText;
   document.getElementById('modalDesc').innerText = "Fresh product available at Choppies Bloedrivier";
   modal.style.display='flex';
 });
});
document.getElementById('closeModal').onclick = ()=> modal.style.display='none';


<script>
const productsData = [
  { title: "Groceries", image: "../image/Groceries.jpg" },
  { title: "Fresh", image: "../image/Fresh-produce.jpg" },
  { title: "Household", image: "../image/Household-products.jpg" }
];

function loadProducts(){
  const container = document.getElementById("product-container");
  productsData.forEach(p => {
    const img = document.createElement("img");
    img.src = p.image;  // JS sets the link by itself
    img.style.width = "200px";
    img.style.margin = "10px";
    container.appendChild(img); // JS displays it by itself
  });
}
loadProducts();
</script>