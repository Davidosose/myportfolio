function showSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display ='flex'
}
function hideSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display ='none'
}
function showNext(){
  const one = document.querySelector('#one')
  one.style.display ='none'

  const two = document.querySelector('#two')
  two.style.display = 'flex'
}
function showPrevious(){
  const two = document.querySelector('#two')
  two.style.display ='none'

  const one = document.querySelector('#one')
  one.style.display = 'flex'
}