function dom() {
  return texts = document.querySelector(".textview")

}
function insert(num) {
  const text = dom();
  text.value += num;
}

function equals() {
  const texts = dom()
      const len = texts.value.length
      
      if(texts.value.includes("+")){
        const pre = +(texts.value.slice(0, texts.value.indexOf("+")));
        const pos = +(texts.value.slice(texts.value.indexOf("+") + 1, len))
        texts.value = `${pre} + ${pos} = ${pre + pos}`
      }else if(texts.value.includes("*")){
        const pre = +(texts.value.slice(0, texts.value.indexOf("*")));
        const pos = +(texts.value.slice(texts.value.indexOf("*") + 1, len))
        texts.value = `${pre} * ${pos} = ${pre * pos}`
      }
      else if(texts.value.includes("-")){
        const pre = +(texts.value.slice(0, texts.value.indexOf("-")));
        const pos = +(texts.value.slice(texts.value.indexOf("-") + 1, len))
        texts.value = `${pre} - ${pos} = ${pre - pos}`
      }
      else if(texts.value.includes("/")){
        const pre = +(texts.value.slice(0, texts.value.indexOf("/")));
        const pos = +(texts.value.slice(texts.value.indexOf("/") + 1, len))
        texts.value = `${pre} / ${pos} = ${pre / pos}`
      }

}

function clean() {
  const text = dom()
  text.value = '';
}

function back() {
  const text = dom()
  text.value = text.value.slice(0, -1)
}