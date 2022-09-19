document.querySelectorAll('.frequent-questions__accordeon-item__trigger').forEach((item) => 
item.addEventListener('click', () => {
    const parent = item.parentNode;
    
    

    if (parent.classList.contains('frequent-questions__accordeon-item_active')) {
        parent.classList.remove('frequent-questions__accordeon-item_active');
      
        

        document.querySelectorAll('.frequent-questions__accordeon-item__button')
        .forEach((child) => child.classList.remove('frequent-questions__accordeon-item__button_active'));
        
        //эта логика работает при закрытии уже открытого вопроса
        
    } else { // если аккордеон-айтем не содержит класс актив
        document
        .querySelectorAll('.frequent-questions__accordeon-item')
        .forEach((child) => child.classList.remove('frequent-questions__accordeon-item_active'));
        parent.classList.toggle('frequent-questions__accordeon-item_active'); //эта строка не понятна
        console.log('!')
       //эта логика работает  для открытия 
      

       parent.querySelectorAll('.frequent-questions__accordeon-item__button')
        .forEach((child) => child.classList.add('frequent-questions__accordeon-item__button_active'));
        parent.classList.remove('frequent-questions__accordeon-item__button_active')
        

    
 }
})
)

