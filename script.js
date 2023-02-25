btn_element = document.querySelector("#menu");
menu_active = document.querySelector("#menu-active");
// sections buttons
section1_btn = document.querySelector("#section1-btn");
section2_btn = document.querySelector("#section2-btn");
section3_btn = document.querySelector("#section3-btn");
section4_btn = document.querySelector("#section4-btn");
// sections
breakfast_section = document.querySelector("#section-1");
lunch_section = document.querySelector("#section-2");
snack_section = document.querySelector("#section-3");
dinner_section = document.querySelector("#section-4");

is_active = false;

btn_element.addEventListener("click", () => {
  if (is_active) {
    menu_active.style.display = "none";
    is_active = false;
  } else {
    menu_active.style.display = "block";
    is_active = true;
    // add events
    section1_btn.addEventListener("click", () => {
      breakfast_section.scrollIntoView({ behavior: "smooth" });
      menu_active.style.display = "none";
      is_active = false;
    });

    section2_btn.addEventListener("click", () => {
      lunch_section.scrollIntoView({ behavior: "smooth" });
      menu_active.style.display = "none";
      is_active = false;
    });

    section3_btn.addEventListener("click", () => {
      snack_section.scrollIntoView({ behavior: "smooth" });
      menu_active.style.display = "none";
      is_active = false;
    });

    section4_btn.addEventListener("click", () => {
      dinner_section.scrollIntoView({ behavior: "smooth" });
      menu_active.style.display = "none";
      is_active = false;
    });
  }
});
