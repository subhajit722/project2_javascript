const mo = document.querySelector('.b1');
const model = document.querySelector('.d2');
const over = document.querySelector('.over');

mo.addEventListener('click',function(){
    model.classList.remove('hide')
    over.classList.remove('hide')

})

const clos = document.querySelector('.btnc');
 const closem = function()
{
    model.classList.add('hide')
    over.classList.add('hide')


}


over.addEventListener('click', closem)
clos.addEventListener('click',closem)

document.addEventListener('keydown',function(e){
   
    if(e.key==='Escape'&& !model.classList.contains('hide')){
        closem()
    }
  
})
  