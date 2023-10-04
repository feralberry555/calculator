// const inputElement = document.getElementById('title')
// const createBtn = document.getElementById('create')
// const listElement = document.getElementById('list')

// console.log(inputElement.value); //value - возвращает или устанавливает значение атрибута из html

//const notes = ['рассказать теорию объектов', 'сделать полезный завтрак']

// function getNoteTemplate(title) {
// 	return ` 
// 		<li class="list-group-item d-flex justify-content-between align-items-center">
// 		   <span>${title}</span> 
// 		   <span>
// 		     <span class="btn btn-small btn-success">&check;</span>
// 		     <span class="btn btn-small btn-danger">&times;</span>
// 		   </span>
// 		</li>
//   `
// }

// function render() {

// 	// for (let i = 0; i < notes.length; i++) {
// 	// 	listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i]))
// 	// }

// 	for(let note of notes) {
// 		listElement.insertAdjacentHTML('beforeend', getNoteTemplate(note))
// 	}
// }

// render()

// createBtn.onclick = function () {
// 	if (inputElement.value.length === 0) {
// 		return  //С помощью условного опреатора if, мы создали функцию где завершаем(завершение - return) добавление заметки, если в inputElement, 
//		length = 0 
// 	}
// 	// listElement.innerHTML =  
//   listElement.insertAdjacentHTML('beforeend',  
//   	getNoteTemplate(inputElement.value)
// 	)

//   	 //insertAdjacentHTML - свойство, разбирает указанный текст как HTML 
//      //вставляет полученные узлы в дерево DOM 

//    inputElement.value = '' //после сохранения "добавить", inputElement чистится
// }
//Свойство inner.HTML - позволяет хранить в элементе строчку из html-кода
//Можно использовать для выведения уже каких-то готовых стилей для программы
//Мы добавили в span с помощью ${}, название элемента, где мы записываем заметку, что бы
//она сохранялась в listElement.

// console.log(typeof person);
const inputElement = document.getElementById('title')
const createBtn = document.getElementById('create')
const listElement = document.getElementById('list')

const notes = [
	{
		title: 'сделать практику по js',
		completed: false,
	},
	{
		title: 'сделать дз по строительству',
		completed: false,
	},
	{
		title: 'сделать полезный ужин',
		completed: false,
	},
]

function render() {
	listElement.innerHTML = ''
	for (let i = 0; i < notes.length; i++) {
		listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i], i))
	}
}

render()

document.addEventListener('keydown', function (e) {
	if (e.key === 'Enter') {
		createBtn.onclick();
	}
}); //сделала чт бы с помощью Enter создавались новые заметки

createBtn.onclick = function () {
	if (inputElement.value.length === 0) {
		return  
	}
	const newNote = {
		title: inputElement.value,
		completed: false,
	}
  listElement.insertAdjacentHTML(
  	'beforeend',  
  	getNoteTemplate(newNote)
	)
	notes.push(newNote) //метод push - добавляет один и более элементов в конец массива. Значение внутри - это элемент который добавляется в конец массива
	render()
  inputElement.value = '' 
}

listElement.onclick = function listsElement(event) {
	if (event.target.dataset.index) {
		const index = parseInt(event.target.dataset.index)
									//Number(event.target.dataset.index) 
		const type = event.target.dataset.type             //позволит определить какое действие необходимо совершить

		if (type === 'toggle') {
			notes[index].completed = !notes[index].completed
		} else if (type === 'remove') {
			console.log('remove', index);
			// document.querySelector('ul li').style.display = 'none'; - ПЕРЕДЕЛАТЬ
		}	
		render()																					 // привели переменную 
																											 //в тип данных number с помощью parseInt, или же можно с помощью Number()
	} //если что то будет написано event.target.dataset.index, то код выполниться
}

function getNoteTemplate(note, index) {
	return ` 
		<li class="list-group-item d-flex justify-content-between align-items-center">
		   <span class="${note.completed ? 'text-decoration-line-through' : ''}">${note.title}</span> 
		   <span>
		     <span class="btn btn-small btn-${note.completed ? 'warning' : 'success'}" 
		     		data-index="${index}"data-type="toggle">&check;</span>
		     <span class="btn btn-small btn-danger" 
		     		data-index="${index}"data-type="remove">&times;</span>
		   </span>
		</li>
  `
}
