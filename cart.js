let selectedItems = []
if (localStorage.getItem('cart')) {
	selectedItems = JSON.parse(localStorage.getItem('cart'))
}

function renderALLItems() {
	for (let item of selectedItems) {
	let itemBox = document.createElement('div')
	let itemImg = document.createElement('img')
	let itemWeight = document.createElement('h6')
	let itemTitle = document.createElement('h5')
	let itemBarcode = document.createElement('h6')
	let itemMark = document.createElement('h6')
	let itemBrand = document.createElement('h6')
	let itemPrice = document.createElement('p')
	

	itemImg.src = item.img,
	itemWeight.textContent = 'Масса:' + item.weight,
	itemTitle.textContent = 'Название:' + item.title,
	itemBarcode.textContent = 'Штрихкод:' + item.barcode,
	itemMark.textContent = 'Производство:' + item.mark,
	itemPrice.textContent = 'Цена:' + item.price,


	itemBox.className = 'itemBox',
	itemBox.id = item.id,


	itemBox.append(itemImg);
	itemBox.append(itemWeight);
	itemBox.append(itemTitle);
	itemBox.append(itemBarcode);
	itemBox.append(itemMark);
	itemBox.append(itemPrice);

	document.querySelector('.selected-items').append(itemBox)
}
}
renderALLItems()