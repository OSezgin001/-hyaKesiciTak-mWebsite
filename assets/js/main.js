document.addEventListener("DOMContentLoaded", function () {
  // Tüm Formspree formlarını yakala
  const forms = document.querySelectorAll('form[action="https://formspree.io/f/mayzpqje"]');

  forms.forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Sayfanın yönlenmesini engelle

      const endpoint = form.getAttribute("action");
      const formData = new FormData(form);

      fetch(endpoint, {
        method: "POST",
        headers: {
          "Accept": "application/json"
        },
        body: formData
      })
      .then(function (response) {
        if (response.ok) {
          alert("Mesajınız iletilmiştir. En kısa sürede sizlere dönüş yapacağız.");
          form.reset();

          // Eğer form modal içindeyse modalı kapat
          const modalEl = form.closest(".modal");
          if (modalEl) {
            const modalInstance = bootstrap.Modal.getInstance(modalEl);
            if (modalInstance) {
              modalInstance.hide();
            }
          }
        } else {
          alert("Bir hata oluştu. Lütfen daha sonra tekrar deneyiniz.");
        }
      })
      .catch(function () {
        alert("Bir hata oluştu. Lütfen daha sonra tekrar deneyiniz.");
      });
    });
  });
});
