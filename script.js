const themeBtn = document.getElementById("theme-toggle");
      themeBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        themeBtn.textContent = document.body.classList.contains("dark-mode")
          ? "☀️"
          : "🌙";
      });

      const homeLink = document.querySelector('.nav-link[href="#home"]');
      const aboutLink = document.querySelector('.nav-link[href="#about"]');
      const homeSection = document.getElementById("home");
      const aboutSection = document.getElementById("about");

     
      homeLink.addEventListener("click", (e) => {
        e.preventDefault();
        homeSection.style.display = "block";
        aboutSection.style.display = "none";
      });

      
      aboutLink.addEventListener("click", (e) => {
        e.preventDefault();
        aboutSection.style.display = "block";
        homeSection.className("d-none")
      });