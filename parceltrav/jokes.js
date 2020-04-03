import axios from 'axios'

//nodeJS
// module.exports = {
//     getOne:  () => {
//         return new Promise((resolve, reject) => {
//             fetch('https://api.icndb.com/jokes/random')
//             .then(res => res.json())
//             .then(data => {
//               resolve(data.value.joke);
//       })
//         });
      
//     }
// }

//ES2015
// export const jokes = {
//     getOne:  () => {
//         return new Promise((resolve, reject) => {
//             fetch('https://api.icndb.com/jokes/random')
//             .then(res => res.json())
//             .then(data => {
//               resolve(data.value.joke);
//       })
//         });
      
//     }
// }

export const jokes = {
    getOne: function() {
        return new Promise((resolve, reject) => {
            axios.get('https://api.icndb.com/jokes/random')
            .then(res => {
                resolve(res.data.value.joke);
            });
        });
    }
}