const pagination = document.getElementById("pagination")

const paginationList = new Array(15)
let paginationBreak = 0;
let prev;

const createPaginationBox = (index, paginationNum) => {
   const divElement = document.createElement("div");
   divElement.className = "pagination-box"
   if (paginationNum === 11) {
      prev = divElement;
      divElement.classList.add("current-pagination")
   }
   divElement.addEventListener("click", () => {
      if (prev !== undefined) prev.classList.remove("current-pagination") 
      divElement.classList.add("current-pagination");
      prev = divElement
   })

   if (index === 0 || index === paginationList.length - 1) {
      divElement.textContent = index === 0? "<" : ">"
   } else if (index === 3 || index === 11) {
      divElement.textContent = "..."
   }else {
      divElement.textContent = paginationNum === 0? index : paginationNum
   }
   return divElement
}



for (let i = 0; i < paginationList.length; i++) {
   const element = createPaginationBox(i, paginationBreak);
   if (i === 0 || i === paginationList.length - 1) {
   
    pagination.append(element)
   } else if (i === 3) {
      
    paginationBreak = 8;
    pagination.append(element)
   } else if (i === 11) {
    paginationBreak = 56;
    pagination.append(element)
   } else if (paginationBreak > 7) {
    pagination.append(element)
    paginationBreak++
   } else {
    pagination.append(element)
   }
}


