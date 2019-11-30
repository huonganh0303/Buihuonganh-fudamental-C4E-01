// const title = document.getElementById('title')
// const contentElements = document.getElementsByClassName('content')
// console.log(contentElements)
// console.log(title)

// console.dir(title)
// title.innerText = 'DOM'
// function clickAction() {
//     if (title.style.color === 'red') {
//                 title.style.color = 'blue';
//             } else {
//                 title.style.color = 'red';
//             }    
// };
// title.addEventListener('mouseover', clickAction);
// // title.addEventListener('click', function() {
//     if (title.style.color === 'red') {
//         title.style.color = 'blue';
//     } else {
//         title.style.color = 'red';
//     }    
    
    // console.log('hehe');
    // title.style.color = 'red'
// });

// console.log (title.style.color)




// for (let i=0; i<contentElements.length; i++) {
//     contentElements[i].innerText = 'DOM content'
// }
// title.addEventListener('mouseover', clickAction);

function action (e) {
    console.log(e);
    const number = Number(e.target.nextElementSibling.innerText);
    console.log(e.target.nextElementSibling.innerText)
    e.target.nextElementSibling.innerText = number + 1
  }
  
  const numbersElement = document.getElementsByClassName('content');
  for (let i=0; i<numbersElement.length; i+=1) {
    numbersElement[i].addEventListener('click', action);
  }
  
  
  const button = document.getElementById('button');
  
  let count = 0
  button.addEventListener('click', function(e){
    const container = document.getElementById('container');
    container.innerHTML += `<p>` + count + `</p>`;
    count += 1
  });