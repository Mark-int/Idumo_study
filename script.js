const hambarger = document.querySelector('.hamburgermenu');
const link = document.querySelector('.link');
const link_li = document.querySelector('.link li ');

hambarger.addEventListener('click',()=>{
    link.classList.toggle('open');
})
$('#link a[href]').on('click', function(event) {
    $('.hamburgermenu').trigger('click');
});
