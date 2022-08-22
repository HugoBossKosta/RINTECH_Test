function openMenu() {
    document.getElementById("sidebar").classList.toggle('active');
    document.getElementById("sidebar-menu").classList.toggle('active');
    document.getElementById("sidebar-background").classList.toggle('active');
    document.getElementById("sidebar-cross").classList.toggle('active');
    document.getElementsByName("body").classList.toggle('active');
   }


  //  Добавляю выключение меню ,при переходе по якорной ссылке

  // function closeMenu() {
  //   document.getElementById("sidebar-menu").classList.toggle('active');


  // }





// Добавляем отключение скрола
const side=document.querySelector('#sidebar');
const sidecross=document.querySelector('#sidebar-cross');
const sideback=document.querySelector('#sidebar-background');

const toggleScrollActive =() => {
    if(document.body.style.overflow !=='hidden') {
        document.body.style.overflow ='hidden';
    }
    else {
        document.body.style.overflow='auto';
    }
}

const toggleScroll =() => {
    if(document.body.style.overflow !=='auto') {
        document.body.style.overflow ='auto';
    }
    else {
        document.body.style.overflow='hidden';
    }
}


side.addEventListener('click', toggleScrollActive);
sidecross.addEventListener('click', toggleScroll);
sideback.addEventListener('click', toggleScroll);
  


//   Появление элементов при скроле страницы сбоков и сверху

function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('element-show', 'element-showR', 'element-showL', 'element-showlogUP', 'element-showlogDown');
      //  change.target.classList.add('element-showR','element-showL');
      //  change.target.classList.add('element-showL');
      }
    });
  }
  
  let options = {
    threshold: [0.2] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.element-animation');
  
  let optionsR = {
    threshold: [0.2] };
  let observerR = new IntersectionObserver(onEntry, optionsR);
  let elementsR = document.querySelectorAll('.element-animationR');

  let optionsL = {
    threshold: [0.2] };
  let observerL = new IntersectionObserver(onEntry, optionsL);
  let elementsL = document.querySelectorAll('.element-animationL');

  let optionslogUP = {
    threshold: [0.2] };
  let observerlogUP = new IntersectionObserver(onEntry, optionslogUP);
  let elementslogUP = document.querySelectorAll('.element-animationLogUp');

  let optionslogDown = {
    threshold: [0.2] };
  let observerlogDown = new IntersectionObserver(onEntry, optionslogDown);
  let elementslogDown = document.querySelectorAll('.element-animationLogDown');

  for (let elm of elements) {
    observer.observe(elm);
  }

  for (let elmR of elementsR) {
        observerR.observe(elmR);
  }

  for (let elmL of elementsL) {
    observerL.observe(elmL);
  }

  for (let elmLogUP of elementslogUP) {
    observerL.observe(elmLogUP);
  }

  for (let elmLogDown of elementslogDown) {
    observerL.observe(elmLogDown);
  }


    // Переход на страницу по кнопке

    // $('button[name="connect_us"]').click(function(){
    //   location.href="../RINTECH page/RINTECH page_contacts.html";
    // })

    document.getElementsByName("B_connect_with_us")[0].onclick = function(){window.location.href='./RINTECH page/RINTECH page_contacts.html'}

    document.getElementsByName("B_more")[0].onclick = function(){window.location.href='./RINTECH page/RINTECH page_about-company.html'}



   
  