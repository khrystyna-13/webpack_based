import menu from "./menu.json";
console.log(menu);
import menuItemTemplate from "./menu-item.hbs";

// генерація меню
const item = menuItemTemplate(menu);
const menuList = document.querySelector(".js-menu");
menuList.insertAdjacentHTML("afterbegin", item);
// переключатель тем
const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};
const switchBtn = document.querySelector(".js-switch-input");
const section = document.querySelector(".module-10");
console.log(switchBtn);
if (localStorage.getItem("colorTheme")) {
  section.classList.add(Theme.DARK);
  switchBtn.checked = true;
}
switchBtn.addEventListener("change", () => {
  console.dir(switchBtn);
  if (switchBtn.checked) {
    localStorage.setItem("colorTheme", " ");
    section.classList.add(Theme.DARK);
    section.classList.remove(Theme.LIGHT);
  } else {
    localStorage.removeItem("colorTheme");
    section.classList.add(Theme.LIGHT);
    section.classList.remove(Theme.DARK);
  }
});
