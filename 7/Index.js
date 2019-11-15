// function generateList(text, callback) { //callback
//     let array = text.split(' ')
//    let sum = callback(array) //callback
// console.log(sum)
//     return array

// }
    // function action1() {
    //     console.log("i am action1")
    // }
// function calcSum(array) {
//     let number = 0
//     for (let i = 0; i <array.length; i += 1) {
//         number += Number(array[i])
//     }
//     return number
//     
// }
// let ListNumbers = generateList(" 2 34 64 24 453 3", calcSum)
// console.log(ListNumbers)

// function loop(array, callback) {
//     for(let i = 0; i <array.length; i += 1) {
//         callback(array[i])
//     }
// }
// function callback(item) {
//     console.log(item)
// }
//     function print(item) {
//         console.log(item)
//     }
    // loop([1,2,3,45,3], function(item) {
    //     console.log(item)
    // })
// function callback(item) { //item từ array gọi ra
//     console.log(item)
// }

// function hocBai(action) {
//     console.log("hoc bai")
//     return action()
// }

// function diNgu() {
//     console.log("di ngu")
// }

// setTimeout(hocBai(diNgu), 3000);
// diNgu();


// function diCho(tacDuong) {
//     return new Promise(funtion(resolve, reject)) {
//         console.log("dang di cho")
//     }if (tacDuong == true) {
//             reject("khong di duoc")
//         } else {
//             resolve("rau muong")
//         }
//         // resolve("rau");
    
//     })
// }

// let result = diCho(false).then(function(item) {
//     console.log(item)
    
// }).catch(function(reason) {
//     console.log(reason)

// });

// async function muaDo() {
//     try {
//         const item = await diCho(false)
//         console.log(item)
//     } catch(err) {
//         console.log(err)
//     }
// }
// muaDo()

// fetch("http://5dc6a9cb317717001434f796.mockapi.io/api/members")
// .then(function(response) {
//     response.json().then(function(data) {
//         console.log("Promise",data)
//     })
// });

// async function getData() { 
//     try {
//         const response = await fetch("http://5dc6a9cb317717001434f796.mockapi.io/api/members")
//         const data = await response.json()
//         console.log("await", data)
//     }
//    catch(err) {
//        console.log(err)
//    }
// }
// async function postData(data) {   
//    const url = `http://5dc6a9cb317717001434f796.mockapi.io/api/members/${id}';
//    const response = await fetch(url, {
//     method: "POST",
//     body: JSON.stringify(data),
//     headers: {
//     "content-type": "application/json"
// }
//    });
// return await respone.json()
// }

// async function updateData(id, data) {  //Input
//     const url = `http://5dc6a9cb317717001434f796.mockapi.io/api/members/${id}`;
//     await fetch(url, {
//     method: "PUT",
//     body: JSON.stringify(data),
//     headers: {
//     "content-type": "application/json"
//     }
// });
// }
// async function deleteData(id) {
//     const url = `http://5dc6a9cb317717001434f796.mockapi.io/api/members/${id}`;
//     await fetch(url, {
//     method: "DELETE",
//     
// });
// }



//     
// async function main() {
    // const data = {
        //         name: "Anh",
        //         gender: 2,
        //         role: "officer"
        //     };
//     const newData = await postData(data);
// console.log(newData)
//     await postData(newdata.id, data);
//     await updateData(newdata.id, Data);
//     await deleteData(newdata.id);
//     await getData();
//     console.log("Done")
// }
// main();


async function postData(data) {   
       const url = `https://sample.mindx.edu.vn/c4e/api/posts/${_id}';
       response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
        "content-type": "application/json"
    }
       });
      
    }
    postData(data);