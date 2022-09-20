document.querySelectorAll('.frequent-questions__accordeon-item__trigger').forEach((item) => 
item.addEventListener('click', () => { // мы выбрали все триггеры и для каждого из них повесили слушатель на клик
    const parent = item.parentNode; //parentNode - это родительский узел
    
    

    if (parent.classList.contains('frequent-questions__accordeon-item_active')) { //если родитель триггера имеет класс эктив
        parent.classList.remove('frequent-questions__accordeon-item_active');// то по клику на триггер мы его удаляем
      
        

       /*document.querySelectorAll('.frequent-questions__accordeon-item__button')
        .forEach((child) => child.classList.remove('frequent-questions__accordeon-item__button_active'));*/
        
      

    } else { // если аккордеон-айтем не содержит класс актив
        document
        .querySelectorAll('.frequent-questions__accordeon-item') //то мы находим все аккордеон-айтемы
        .forEach((child) => child.classList.remove('frequent-questions__accordeon-item_active')); //и для  каждого из них по клику удаляем клас эктив
        parent.classList.toggle('frequent-questions__accordeon-item_active'); //а для родительского элеманта айтемов мы переключаем стиль на противоположный
        console.log('!')
      
        //эта логика работает  для открытия второго айтема
      

      /* parent.querySelectorAll('.frequent-questions__accordeon-item__button')
        .forEach((child) => child.classList.add('frequent-questions__accordeon-item__button_active'));
        parent.classList.remove('frequent-questions__accordeon-item__button_active')*/
        

    
 }
})
)

