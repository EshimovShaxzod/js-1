

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










