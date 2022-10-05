if (document.documentElement.clientWidth > 1024) {

  window.onscroll = function(){
  
    let tab1 = document.querySelector('.tab-1');
    let tab2 = document.querySelector('.tab-2');
    let tab3 = document.querySelector('.tab-3');
    let tab4 = document.querySelector('.tab-4');
    let tab5 = document.querySelector('.tab-5');
    let shape = document.querySelector('.shape');
  
    
    let card1 =  document.querySelector('#card1');
    let card2 =  document.querySelector('#card2');
    let card3 =  document.querySelector('#card3');
    let card4 =  document.querySelector('#card4');
    let card5 =  document.querySelector('#card5');

    let html = document.documentElement;
    let scroll = html.scrollTop;
    
    if (scroll<80 ) { 
      console.log(scroll); 
      card1.classList.remove("hide");
      card2.classList.add("hide");
      tab2.classList.add("inactive");
      tab1.classList.remove("inactive");
      shape.style.fill="#5A58CF";
    } 
   
   else if (scroll>80 && scroll<140) { 
   console.log(scroll); 
        card1.classList.add("hide"); 
        card2.classList.remove("hide");
        card3.classList.add("hide");
        tab1.classList.add("inactive");
        tab2.classList.remove("inactive");
        tab3.classList.add("inactive");
        shape.style.fill="#408BFC";
    } 

   else if(scroll>140 && scroll<220) { 
    card2.classList.add("hide");
    card3.classList.remove("hide");
    card4.classList.add("hide");
    tab2.classList.add("inactive");
    tab3.classList.remove("inactive");
    tab4.classList.add("inactive");
    shape.style.fill="#4F6258";
    } 
  
    else if ( scroll>220 && scroll<300) { 
      card3.classList.add("hide");
      card4.classList.remove("hide");
      card5.classList.add("hide");
      tab3.classList.add("inactive");
      tab4.classList.remove("inactive");
      tab5.classList.add("inactive");
      shape.style.fill="#F9D270";
  
    }
    else if (scroll>300) { 
      card4.classList.add("hide");
      card5.classList.remove("hide");
      tab4.classList.add("inactive");
      tab5.classList.remove("inactive");
      shape.style.fill="#CF6D58";
      }
    }
}

if (document.documentElement.clientWidth <= 1024) {

    let tabsBtn   = document.querySelectorAll(".tab");
    let tabsItems = document.querySelectorAll(".card-section");
    
    tabsBtn.forEach(onTabClick);
    
    function onTabClick(item) {
        item.addEventListener("click", function() {
            let currentBtn = item;
            let tabId = currentBtn.getAttribute("data-tab");
            let currentTab = document.querySelector(tabId);
    
            if( ! currentBtn.classList.contains('pressed') ) {
                tabsBtn.forEach(function(item) {
                    item.classList.add('inactive');
                });
        
                tabsItems.forEach(function(item) {
                    item.classList.remove('active');
                });
        
                currentBtn.classList.remove('inactive');
                currentTab.classList.add('active');
            }
        });
      }
    document.querySelector('.tab1').click();
}