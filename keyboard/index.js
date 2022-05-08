const keyboard = {
	elements: {
		wrapper: null,
		main: null,
		keyboardContainer: null,
		btns: []
	},

	properties: {
		value: '',
		capsLock: false,
		oninput: null
	},

	init() {

		const title = document.createElement('h1'),
			os = document.createElement('h3'),
			lang = document.createElement('h3'),
			textArea = document.createElement('textarea');

		this.elements.wrapper = document.createElement('div');
		this.elements.main = document.createElement('div');
		this.elements.keyboardContainer = document.createElement('div');

		this.elements.wrapper.classList.add('wrapper');
		this.elements.main.classList.add('keyboard');
		this.elements.keyboardContainer.classList.add('keyboard__container');
		this.elements.keyboardContainer.appendChild(this.createBtns());

		this.elements.btns = this.elements.keyboardContainer.querySelectorAll('.btn')

		title.innerText = "Virtual - Keyboard";
		os.classList.add('os');
		os.innerHTML = "The keyboard is created for <strong>Windows</strong>";
		lang.classList.add('lang');
		lang.innerHTML = "To switch language press <strong>left CTRL + ALT</strong>";
		textArea.classList.add('keyboard-screen');

		this.elements.wrapper.appendChild(title);
		this.elements.wrapper.appendChild(textArea);
		this.elements.wrapper.appendChild(this.elements.main);
		this.elements.main.appendChild(this.elements.keyboardContainer);
		this.elements.wrapper.appendChild(os);
		this.elements.wrapper.appendChild(lang);
		document.body.appendChild(this.elements.wrapper);
	},

	createBtns() {
		const fragment = document.createDocumentFragment();

		const enLayout = [
			"`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace",
			"Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", "Del",
			"CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter",
			"lShift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "?", "ArrowUp", "rShift",
			"lCtrl", "Win", "lAlt", "space", "rAlt", "ArrowLeft", "ArrowDown", "ArrowRight", "rCtrl"
		];

		const ruLayout = [
			"ё", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace",
			"Tab", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "\\", "Del",
			"CapsLock", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "Enter",
			"lShift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".", "&uArr", "rShift",
			"lCtrl", "Win", "lAlt", "space", "rAlt", "&lArr;", "&dArr;", "&rArr;", "rCtrl"
		];

		enLayout.forEach(key => {
			const btnElement = document.createElement('button');
			const insertLIneBreak = ["Backspace", "Del", "Enter", "rShift"].indexOf(key) !== -1;
			

			btnElement.setAttribute("type", 'button');
			btnElement.classList.add('btn');
			btnElement.isLetterButton = false;

			switch (key) { 
				case "Backspace":
					btnElement.classList.add('medium');
					btnElement.innerText = "Backspace";
					btnElement.addEventListener('click', () => {
						this.properties.value = this.properties.value.substring(0, this.properties.value.length - 1);
						this.fireEvent("oninput");
					});
					break;

			default:
					btnElement.textContent = key.toLowerCase();

					btnElement.addEventListener('click', () => {
						this.properties.value += this.properties.capsLock ? key.toUpperCase() : key.toLowerCase();
						this.fireEvent("oninput");
					});
					btnElement.isLetterButton = true;
					break;
			}

			fragment.appendChild(btnElement);

			if (insertLIneBreak) { 
				fragment.appendChild(document.createElement('br'));
			}
		});	
		
		return fragment;
	},
}

window.addEventListener('DOMContentLoaded', function () {
	keyboard.init();
});