const menum = window.document.getElementById('menu-mobile') 

function clickMenu() {
   if (menum.style.display == 'flex') {
    menum.style.display = 'none'
   } else {
    menum.style.display = 'flex'
   }
}

function closeMenu() {      
    if (menum.style.display == 'none') {
        menum.style.display = 'block'
    } else {
        menum.style.display = 'none'
    }
}