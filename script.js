document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});


// الوضع الليلي
const darkModeButton = document.getElementById("toggle-dark-mode");
darkModeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("dark-mode", document.body.classList.contains("dark-mode") ? "enabled" : "disabled");
});

// استعادة الوضع الليلي من LocalStorage
if (localStorage.getItem("dark-mode") === "enabled") {
  document.body.classList.add("dark-mode");
}

// تغيير اللغة
const languageButton = document.getElementById("toggle-language");
const title = document.getElementById("title");
const description = document.getElementById("description");
const aboutDescription = document.getElementById("about-description");

languageButton.addEventListener("click", () => {
  if (document.documentElement.lang === "ar") {
    document.documentElement.lang = "en";
    languageButton.textContent = "AR";
    title.textContent = "Welcome to My Portfolio";
    description.textContent = "I am [Your Name], a professional web developer.";
    aboutDescription.textContent = "Enter a brief description about yourself here.";
  } else {
    document.documentElement.lang = "ar";
    languageButton.textContent = "EN";
    title.textContent = "مرحبًا بك في موقعي";
    description.textContent = "أنا [اسمك]، مطور ويب محترف.";
    aboutDescription.textContent = "[أدخل هنا نبذة مختصرة عن نفسك].";
  }
});


const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
  item.addEventListener('click', () => {
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `<img src="${item.src}" alt="${item.alt}">`;
    document.body.appendChild(lightbox);

    lightbox.addEventListener('click', () => {
      document.body.removeChild(lightbox);
    });
  });
});

const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  // جلب بيانات النموذج
  const formData = new FormData(contactForm);

  // محاكاة إرسال البيانات إلى الخادم
  formStatus.textContent = "جاري الإرسال...";
  setTimeout(() => {
    formStatus.textContent = "تم إرسال رسالتك بنجاح!";
    contactForm.reset();
  }, 2000);
});

