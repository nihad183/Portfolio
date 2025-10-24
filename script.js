function toggleContacts() {
    const contacts = document.getElementById("contacts");
    contacts.classList.toggle("show");
  }

const navItems = document.querySelectorAll(".navbar li");
  const title = document.getElementById("section-title");
  const sections = document.querySelectorAll("section");

  navItems.forEach(item => {
    item.addEventListener("click", () => {
      document.querySelector(".navbar li.active").classList.remove("active");
      item.classList.add("active");

      const sectionId = item.getAttribute("data-section");
      title.textContent = item.textContent;

      sections.forEach(sec => sec.classList.remove("active"));
      document.getElementById(sectionId).classList.add("active");
    });
  });

 


  