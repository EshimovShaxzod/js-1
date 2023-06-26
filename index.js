function negativeFunction(){
    let list = document.getElementById('list_item1');
    list.style.color = '#29292b';
    let list1 = document.getElementById('list_item2');
    list1.style.color = '#a4a4a4';
    let list2 = document.getElementById('list_item3');
    list2.style.color = '#a4a4a4';
    let content = document.getElementById('link')
    content.innerHTML = 'negative content'
}
function positiveFunction(){
    let list1 = document.getElementById('list_item2');
    list1.style.color = '#29292b';
    let list2 = document.getElementById('list_item3');
    list2.style.color = '#a4a4a4';
    let list = document.getElementById('list_item1');
    list.style.color = '#a4a4a4';
    let content = document.getElementById('link');
    content.innerHTML = 'positive content';
}
function neutralFunction(){
    let list2 = document.getElementById('list_item3');
    list2.style.color = '#29292b';
    let list = document.getElementById('list_item1');
    list.style.color = '#a4a4a4';
    let list1 = document.getElementById('list_item2');
    list1.style.color = '#a4a4a4';
    let content = document.getElementById('link');
    content.innerHTML = 'neutral content';
}


let formGroup = document.getElementById('form-group');

formGroup.addEventListener('submit', (e) => {
    e.preventDefault();

    let numberInput = document.getElementById('num');
    let list_item2 = document.getElementById('list_item2');
    let list_item1 = document.getElementById('list_item1');
    let list_item3 = document.getElementById('list_item3');
    let link = document.getElementById('link');

    if(numberInput.value === '1'){
        list_item1.classList.add('active');
        list_item2.classList.remove('active');
        list_item3.classList.remove('active');
        link.innerHTML = 'negative content';
    }else if(numberInput.value === '2'){
        list_item2.classList.add('active');
        list_item1.classList.remove('active');
        list_item3.classList.remove('active');
        link.innerHTML = 'positive content'
    }else if(numberInput.value === '3'){
        list_item3.classList.add('active');
        list_item1.classList.remove('active');
        list_item2.classList.remove('active');
        link.innerHTML = 'neutral content'
    }else{
        let warning = alert('this is no invalid');
        console.log('warning');
    }
    numberInput.value = '';

})









