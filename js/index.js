"use-strict";

// ABOUT
const educationBtn = document.getElementById("education-btn");
const certificatesBtn = document.getElementById("certificates-btn");
const contentListContainer = document.querySelector(".item__list");
const finderTitleEle = document.querySelector(".finder__title");

const educationHtml = `
  <li class="item">
    <div class="item__img-box">
      <img
        class="item__img"
        src="./img/coderhouse_logo.webp"
        alt="CoderHouse Logo"
      />
    </div>
    <div class="item__title-box">
      <p class="item__title">CoderHouse</p>
    </div>
  </li>
  <li class="item">
    <div class="item__img-box">
      <img
        class="item__img"
        src="./img/udemy_logo.webp"
        alt="Udemy Logo"
      />
    </div>
    <div class="item__title-box">
      <p class="item__title">Udemy</p>
    </div>
  </li>`;
const certificatesHtml = `
<li class="item">
  <div class="item__img-box">
    <img
      class="item__img"
      src="./img/coderhouse_logo.webp"
      alt="CoderHouse Logo"
    />
  </div>
  <div class="item__title-box">
    <p class="item__title">HTML & CSS</p>
  </div>
  <div class="item__icon-box">
    <a
      href="https://www.coderhouse.com/pages/certificados/629fb5e3993cad002421dd1a"
      target="_blank"
    >
      <img
        class="item__icon"
        src="./img/eye.svg"
        alt="Eye Icon"
      />
    </a>
  </div>
</li>
<li class="item">
  <div class="item__img-box">
    <img
      class="item__img"
      src="./img/coderhouse_logo.webp"
      alt="CoderHouse Logo"
    />
  </div>
  <div class="item__title-box">
    <p class="item__title">JavaScript</p>
  </div>
  <div class="item__icon-box">
    <a
      href="https://www.coderhouse.com/pages/certificados/62f68e27628efb0024957ecf"
      target="_blank"
    >
      <img
        class="item__icon"
        src="./img/eye.svg"
        alt="Eye Icon"
      />
    </a>
  </div>
</li>
<li class="item">
  <div class="item__img-box">
    <img
      class="item__img"
      src="./img/coderhouse_logo.webp"
      alt="CoderHouse Logo"
    />
  </div>
  <div class="item__title-box">
    <p class="item__title">React</p>
  </div>
  <div class="item__icon-box">
    <a
      href="https://www.coderhouse.com/pages/certificados/6340085161b9e7000e8d224f"
      target="_blank"
    >
      <img
        class="item__icon"
        src="./img/eye.svg"
        alt="Eye Icon"
      />
    </a>
  </div>
</li>
<li class="item">
  <div class="item__img-box">
    <img
      class="item__img"
      src="./img/coderhouse_logo.webp"
      alt="CoderHouse Logo"
    />
  </div>
  <div class="item__title-box">
    <p class="item__title">NodeJs/Express</p>
  </div>
  <div class="item__icon-box">
    <a
      href="https://www.coderhouse.com/pages/certificados/645fdc308da67e0002bc6605"
      target="_blank"
    >
      <img
        class="item__icon"
        src="./img/eye.svg"
        alt="Eye Icon"
      />
    </a>
  </div>
</li>
<li class="item">
  <div class="item__img-box">
    <img
      class="item__img"
      src="./img/udemy_logo.webp"
      alt="Udemy Logo"
    />
  </div>
  <div class="item__title-box">
    <p class="item__title">Advanced JavaScript</p>
  </div>
  <div class="item__icon-box">
    <a
      href="https://www.udemy.com/certificate/UC-58710334-da1b-488d-a0c4-8ea273a39428/"
      target="_blank"
    >
      <img
        class="item__icon"
        src="./img/eye.svg"
        alt="Eye Icon"
      />
    </a>
  </div>
</li>
<li class="item">
  <div class="item__img-box">
    <img
      class="item__img"
      src="./img/udemy_logo.webp"
      alt="Udemy Logo"
    />
  </div>
  <div class="item__title-box">
    <p class="item__title">Advanced NodeJs/Express</p>
  </div>
  <div class="item__icon-box">
    <a
      href="https://www.udemy.com/certificate/UC-c762f944-1f33-44f1-9a9a-e8d8a37244f3/"
      target="_blank"
    >
      <img
        class="item__icon"
        src="./img/eye.svg"
        alt="Eye Icon"
      />
    </a>
  </div>
</li>`;

educationBtn.addEventListener("click", () => {
  if (!educationBtn.classList.contains("active")) {
    educationBtn.classList.add("active");
    certificatesBtn.classList.remove("active");
    finderTitleEle.innerText = "Francisco Ceballos/education";
    contentListContainer.innerHTML = educationHtml;
  }
});

certificatesBtn.addEventListener("click", () => {
  if (!certificatesBtn.classList.contains("active")) {
    certificatesBtn.classList.add("active");
    educationBtn.classList.remove("active");
    finderTitleEle.innerText = "Francisco Ceballos/certificates";
    contentListContainer.innerHTML = certificatesHtml;
  }
});
