// ajax vanila js sebelum ada ajax fetch

// function getMahasiswa(url, success, error) {
//  let xhr = new XMLHttpRequest();
//  xhr.onreadystatechange = function () {

//   if (xhr.readyState === 4) {
//    if (xhr.status === 200) {
//     success(xhr.response);
//    } else if (xhr.status === 404) {
//     error();
//    }
//   }

//  }
//  xhr.open('get', url);
//  xhr.send();
// }
// console.log('mulai');
// getMahasiswa('../mhs.json', result => {
//  const mahasiswa = JSON.parse(result);
//  mahasiswa.forEach(m => console.log(m.name));
// },
//  () => {

// });
// console.log('selesai');


// jquery ajax
console.log('mulai');

$.ajax({
 url: '../mhs.json',
 success: (mhs) => {
  mhs.forEach(m => console.log(m.name));
 },
 error: (e) => {
  console.log(e.responseText)
 }

});

console.log('selesai');