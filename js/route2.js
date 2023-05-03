const listViewButton = document.querySelector('#list-view-button');
const gridViewButton = document.querySelector('#grid-view-button');
const list = document.querySelector('ol');

listViewButton.onclick = function () {
  list.classList.remove('grid-view-filter');
  list.classList.add('list-view-filter');
  $('#grid-view-button').removeClass('currentSelection')
  $('#list-view-button').addClass('currentSelection')
}

gridViewButton.onclick = function () {
  list.classList.remove('list-view-filter');
  list.classList.add('grid-view-filter');
  $('#list-view-button').removeClass('currentSelection')
  $('#grid-view-button').addClass('currentSelection')
}

$(document).ready(function() {
    let appendInnerHtml='';
    for(let i=1;i<=40;i++){
        appendInnerHtml += '<li class="listItem">List item '+ i+'</li>'
    }
    $('.list-view-filter').append(appendInnerHtml);
    $('#list-view-button').addClass('currentSelection')
})
