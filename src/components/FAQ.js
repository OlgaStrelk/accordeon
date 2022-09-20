document.querySelectorAll(".accordeon-item__trigger").forEach((item) =>
	item.addEventListener("click", () => {
		// мы выбрали все триггеры и для каждого из них повесили слушатель на клик
		const parent = item.parentNode; //parentNode - это родительский узел

		if (parent.classList.contains("accordeon-item_active")) {
			console.log('я тут')
			//если родитель триггера имеет класс эктив
			parent.classList.remove("accordeon-item_active");
			parent
				.querySelector(".accordeon-item__button")
				.classList.toggle("accordeon-item__button_active"); // то по клику на триггер мы его удаляем
		} else {
			//проверяем есть ли среди родителей всех элементов "accordeon-item_active"
			document
				.querySelectorAll(".accordeon-item") //то мы находим все аккордеон-айтемы
				.forEach((elem) => {
					if (elem.classList.contains("accordeon-item_active")) {
						elem.classList.remove("accordeon-item_active");
					}
				}); //и для  каждого из них по клику удаляем клас эктив
			parent.classList.toggle("accordeon-item_active");

			document
				.querySelectorAll(".accordeon-item__button")
				.forEach((child) =>
					child.classList.remove("accordeon-item__button_active")
				);
			parent
				.querySelector(".accordeon-item__button")
				.classList.add("accordeon-item__button_active");
		}
	})
);
