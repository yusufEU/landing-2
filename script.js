const btnF = document.querySelector("#btnF");
const closeMd = document.querySelector("#closeMd");
const modal = document.querySelector(".modal");
const form = document.querySelector("#form");

const body = document.body;

const username = document.querySelector("#username");
const email = document.querySelector("#email");
const msg = document.querySelector("#msg");


form.addEventListener("submit", (e) => {

	e.preventDefault();
	if (username.value.trim() === "") {
		alert("Введите Свое Имя");
		return;
	}
	if (email.value.trim() === "") {
		alert("Введите Свою Почту");
		return;
	}
	if (msg.value.trim() === "") {
		alert("Введите Сообщение");
		return;
	}

	modal.classList.add("modal-active");
	body.classList.add("no-scroll");
	form.reset();

});

closeMd.addEventListener("click", () => {
	modal.classList.remove("modal-active");
	body.classList.remove("no-scroll");
});

modal.addEventListener("click", (e) => {
	if (e.target === modal) {
		modal.classList.remove("modal-active");
    	body.classList.remove("no-scroll");
	}
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    modal.classList.remove('modal-active');
    body.classList.remove("no-scroll");
  }
});

