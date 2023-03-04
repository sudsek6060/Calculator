function dom  (){
  return texts = document.querySelector(".textview")

}
function insert(num){
  const text = dom();

    text.value += num;
  }
  
  function equals(){
    
      
  }
  
  function clean(){
    const text = dom()
    text.value = '';
  }
  
  function back(){
    const text = dom()
    text.value = text.value.slice(0,-1)
  }