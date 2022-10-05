if (document.documentElement.clientWidth > 768) {
  

    window.onscroll = function(){
    
      let tab1 = document.querySelector('.tab1');
      let tab2 = document.querySelector('.tab2');
      let tab3 = document.querySelector('.tab3');
      let tab4 = document.querySelector('.tab4');
      let tab5 = document.querySelector('.tab5');
      let shape = document.querySelector('.shape');
    
      let html = document.documentElement;
      let card1 =  document.querySelector('#card1');
      let card2 =  document.querySelector('#card2');
      let card3 =  document.querySelector('#card3');
      let card4 =  document.querySelector('#card4');
      let card5 =  document.querySelector('#card5');
    
     
    
      let scroll = html.scrollTop;
      
    
      if (scroll<80 ) { 
        console.log(scroll); 
        card1.classList.remove("hide");
        card2.classList.add("hide");
        tab2.classList.remove("active2");
        tab1.classList.add("active");
        shape.style.fill="#5A58CF";
      } 
     
     else if (scroll>80 && scroll<140) { 
     console.log(scroll); 
          card1.classList.add("hide"); 
          card2.classList.remove("hide");
          card3.classList.add("hide");
          tab1.classList.remove("active");
          tab2.classList.add("active2");
          tab3.classList.remove("active3");
          shape.style.fill="#408BFC";
      } 
    
     else if(scroll>140 && scroll<220) { 
      card2.classList.add("hide");
      card3.classList.remove("hide");
      card4.classList.add("hide");
      tab2.classList.remove("active2");
      tab3.classList.add("active3");
      tab4.classList.remove("active4");
      shape.style.fill="#4F6258";
      } 
    
      else if ( scroll>220 && scroll<300) { 
        card3.classList.add("hide");
        card4.classList.remove("hide");
        card5.classList.add("hide");
        tab3.classList.remove("active3");
        tab4.classList.add("active4");
        tab5.classList.remove("active5");
        shape.style.fill="#F9D270";
    
      }
      else if (scroll>300) { 
        card4.classList.add("hide");
        card5.classList.remove("hide");
        tab4.classList.remove("active4");
        tab5.classList.add("active5");
        shape.style.fill="#CF6D58";
      }
    }
    }
    