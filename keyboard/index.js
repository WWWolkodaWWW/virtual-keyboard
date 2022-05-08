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

		this.works(textArea.value, currentValue => {
			textArea.value = currentValue;
		});
	},

	createBtns() {
		const fragment = document.createDocumentFragment();

		const enLayout = [
			"`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace",
			"Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", "Delete",
			"CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter",
			"ShiftLeft", "z", "x", "c", "v", "b", "n", "m", ",", ".", "?", "ArrowUp", "ShiftRight",
			"ControlLeft", "Win", "AltLeft", "Space", "AltRight", "ArrowLeft", "ArrowDown", "ArrowRight", "ControlRight"
		];

		const ruLayout = [
			"ё", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace",
			"Tab", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "\\", "Delete",
			"CapsLock", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "Enter",
			"ShiftLeft", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".", "ArrowUp", "ShiftRight",
			"ControlLeft", "Win", "AltLeft", "Space", "AltRight", "ArrowLeft", "ArrowDown", "ArrowRight", "ControlRight"
		];

		enLayout.forEach(key => {
			const btnElement = document.createElement('button');
			const insertLIneBreak = ["Backspace", "Delete", "Enter", "ShiftRight"].indexOf(key) !== -1;
			

			btnElement.setAttribute("type", 'button');
			btnElement.dataset.name = 'Key' + key.toUpperCase();
			btnElement.classList.add('btn');
			btnElement.isLetterButton = false;

			switch (key) { 
				case "Backspace":
					btnElement.classList.add('medium');
					btnElement.dataset.name = key;
					btnElement.innerText = "Backspace";
					btnElement.addEventListener('click', () => {
						this.properties.value = this.properties.value.substring(0, this.properties.value.length - 1);
						this.fireEvent("oninput");
					});
					break;
				
				case "Delete":
					btnElement.innerText = "Del";
					btnElement.dataset.name = key;
					btnElement.addEventListener('click', () => {
						
						this.fireEvent("oninput");
					});
					break;
				
				case "Enter":
					btnElement.classList.add('medium');
					btnElement.innerText = "Enter";
					btnElement.dataset.name = key;
					btnElement.addEventListener('click', () => {
						this.properties.value += "\n";
						this.fireEvent("oninput");
					});
					break;
				
				case "Tab":
					btnElement.classList.add('medium');
					btnElement.dataset.name = key;
					btnElement.innerText = "Tab";
					btnElement.addEventListener('click', () => {
						this.properties.value += "\t";
						// this.properties.value += "    ";
						this.fireEvent("oninput");
					});
					break;
				
				case "Space":
					btnElement.classList.add('large');
					btnElement.dataset.name = key;
					
					btnElement.addEventListener('click', () => {
						this.properties.value += " ";
						this.fireEvent("oninput");
					});
					break;
				
				case "CapsLock":
					btnElement.classList.add('medium', 'on');
					btnElement.dataset.name = key;
					btnElement.innerText = "CapsLock";
					btnElement.addEventListener('click', () => {
						this.toggleCapsLock();
						btnElement.classList.toggle('active', this.properties.capsLock);
					});
					break;
				
				case "ShiftRight":
					btnElement.classList.add('medium');
					btnElement.dataset.name = key;
					btnElement.innerText = "Shift";
					btnElement.addEventListener('click', () => {
						
					});
					break;
				
				case "ShiftLeft":
					btnElement.classList.add('medium');
					btnElement.dataset.name = key;
					btnElement.innerText = "Shift";
					btnElement.addEventListener('click', () => {
						
					});

					break;
				
				case "ControlRight":
					btnElement.textContent = "Ctrl";
					btnElement.dataset.name = key;
					btnElement.addEventListener('click', () => {
						
					});
					break;
				
				case "ControlLeft":
					btnElement.innerText = "Ctrl";
					btnElement.dataset.name = key;
					btnElement.addEventListener('click', () => {
						
					});
					break;
				
				case "AltRight":
					btnElement.innerText = "Alt";
					btnElement.dataset.name = key;
					btnElement.addEventListener('click', () => {
						
					});
					break;
				
				case "AltLeft":
					btnElement.innerText = "Alt";
					btnElement.dataset.name = key;
					btnElement.addEventListener('click', () => {
						
					});
					break;
				
				case "Win":
					btnElement.innerText = "Win";
					btnElement.dataset.name = key;
					btnElement.addEventListener('click', () => {
						
					});
					break;
				
				case "ArrowUp":
					btnElement.classList.add('arrow');
					btnElement.innerHTML = "&uArr;";

					btnElement.addEventListener('click', () => {
						
					});
					break;
				
				case "ArrowDown":
					btnElement.classList.add('arrow');
					btnElement.innerHTML = "&dArr;";

					btnElement.addEventListener('click', () => {
						
					});
					break;
			
				case "ArrowLeft":
					btnElement.classList.add('arrow');
					btnElement.innerHTML = "&lArr;";

					btnElement.addEventListener('click', () => {
						
					});
					break;
			
				case "ArrowRight":
					btnElement.classList.add('arrow');
					btnElement.innerHTML = "&rArr;";
					
					btnElement.addEventListener('click', () => {
						
					});
					break;
				
				case "`":
					btnElement.dataset.name = "Backquote";
					btnElement.innerText = "`";
					btnElement.addEventListener('click', () => {
						this.properties.value += this.properties.capsLock ? key.toUpperCase() : key.toLowerCase();
						this.fireEvent("oninput");
					});
					btnElement.isLetterButton = true;
					break;
				
				case "1":
					btnElement.dataset.name = "Digit1";
					btnElement.innerText = "1";
					btnElement.addEventListener('click', () => {
						this.properties.value += this.properties.capsLock ? key.toUpperCase() : key.toLowerCase();
						this.fireEvent("oninput");
					});
					btnElement.isLetterButton = true;
					break;
				
				case "2":
					btnElement.dataset.name = "Digit2";
					btnElement.innerText = "2";
					btnElement.addEventListener('click', () => {
						this.properties.value += this.properties.capsLock ? key.toUpperCase() : key.toLowerCase();
						this.fireEvent("oninput");
					});
					btnElement.isLetterButton = true;
				break;
				case "3":
					btnElement.dataset.name = "Digit3";
					btnElement.innerText = "3";
					btnElement.addEventListener('click', () => {
						this.properties.value += this.properties.capsLock ? key.toUpperCase() : key.toLowerCase();
						this.fireEvent("oninput");
					});
					btnElement.isLetterButton = true;
				break;
				case "4":
					btnElement.dataset.name = "Digit4";
					btnElement.innerText = "4";
					btnElement.addEventListener('click', () => {
						this.properties.value += this.properties.capsLock ? key.toUpperCase() : key.toLowerCase();
						this.fireEvent("oninput");
					});
					btnElement.isLetterButton = true;
				break;
				case "5":
					btnElement.dataset.name = "Digit5";
					btnElement.innerText = "5";
					btnElement.addEventListener('click', () => {
						this.properties.value += this.properties.capsLock ? key.toUpperCase() : key.toLowerCase();
						this.fireEvent("oninput");
					});
					btnElement.isLetterButton = true;
				break;
				case "6":
					btnElement.dataset.name = "Digit6";
					btnElement.innerText = "6";
					btnElement.addEventListener('click', () => {
						this.properties.value += this.properties.capsLock ? key.toUpperCase() : key.toLowerCase();
						this.fireEvent("oninput");
					});
					btnElement.isLetterButton = true;
				break;
				case "7":
					btnElement.dataset.name = "Digit7";
					btnElement.innerText = "7";
					btnElement.addEventListener('click', () => {
						this.properties.value += this.properties.capsLock ? key.toUpperCase() : key.toLowerCase();
						this.fireEvent("oninput");
					});
					btnElement.isLetterButton = true;
				break;
				case "8":
					btnElement.dataset.name = "Digit8";
					btnElement.innerText = "8";
					btnElement.addEventListener('click', () => {
						this.properties.value += this.properties.capsLock ? key.toUpperCase() : key.toLowerCase();
						this.fireEvent("oninput");
					});
					btnElement.isLetterButton = true;
				break;
				case "9":
					btnElement.dataset.name = "Digit9";
					btnElement.innerText = "9";
					btnElement.addEventListener('click', () => {
						this.properties.value += this.properties.capsLock ? key.toUpperCase() : key.toLowerCase();
						this.fireEvent("oninput");
					});
					btnElement.isLetterButton = true;
				break;
				case "0":
					btnElement.dataset.name = "Digit0";
					btnElement.innerText = "0";
					btnElement.addEventListener('click', () => {
						this.properties.value += this.properties.capsLock ? key.toUpperCase() : key.toLowerCase();
						this.fireEvent("oninput");
					});
					btnElement.isLetterButton = true;
				break;
				case "-":
					btnElement.dataset.name = "Minus";
					btnElement.innerText = "-";
					btnElement.addEventListener('click', () => {
						this.properties.value += this.properties.capsLock ? key.toUpperCase() : key.toLowerCase();
						this.fireEvent("oninput");
					});
					btnElement.isLetterButton = true;
				break;
				case "=":
					btnElement.dataset.name = "Equal";
					btnElement.innerText = "=";
					btnElement.addEventListener('click', () => {
						this.properties.value += this.properties.capsLock ? key.toUpperCase() : key.toLowerCase();
						this.fireEvent("oninput");
					});
					btnElement.isLetterButton = true;
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

	fireEvent(name) { 
		if (typeof this.properties[name] == "function") { 
			this.properties[name](this.properties.value);
		}
	},

	toggleCapsLock() {
		this.properties.capsLock = !this.properties.capsLock;
		for (const key of this.elements.btns) { 
			if (key.isLetterButton) { 
				key.textContent = this.properties.capsLock ? key.textContent.toUpperCase() : key.textContent.toLowerCase();
			}
		}
	},

	works(initialValue, oninput) { 
		this.properties.value = initialValue || "";
		this.properties.oninput = oninput;
	}
}

document.onkeydown = function (event) { 
	console.log(event.code);
}

window.addEventListener('DOMContentLoaded', function () {
	keyboard.init();
});