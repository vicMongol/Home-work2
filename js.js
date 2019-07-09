// var arr = [1, 5, 'bar', undefined, 6, 1, 'bar', undefined, 7, 6];
// function unique(arr) {
//     var result = [];
  
//     nextInput: // nextInput это метка для continue... 
//       for (var i = 0; i < arr.length; i++) {
//         var str = arr[i]; 
//         for (var j = 0; j < result.length; j++) {
//           if (result[j] == str) continue nextInput; // ...для остановления итерации и перехода на новый круг
//         }
//         result.push(str);
//       }
  
//     return result;
//   }
//   console.log( unique(arr) );


// function saveArr(arr) {
//   return arr.filter(function(el, index, array) {
//     return arr.index(el) === index;
//   });
// }

// saveArr = function(arr) {
//   var resultArr = [];
//   for (var element of arr) {
//     if (resultArr.indexOf(element) < 0) {
//       resultArr.push(element);
//     }
//   }
//   return resultArr;
// }
// function saveArr();

// var confirmButton = document.getElementById( 'confirm' );
// confirmButton.addEventListener(  'click', saySmth);

// function saySmth(event) {
//     console.log(event);
//     var firstName = document.getElementById('firstName').value;
//     var lastName = document.getElementById('lastName').value;
//     var email = document.getElementById('email').value;
//     if (firstName.length < 5) {
//         alert('firstName is too short');
//         document.getElementById('firstName').value = '';
//         return;
//     } else if (lastName.length < 5) {
//         alert('lastName is too short');
//         document.getElementById('lastName').value = '';
//         return;
//     } else if (email.length < 5) {
//         alert('email is too short');
//         document.getElementById('email').value = '';
//         return;    
//     } else {
//         alert('Ну наконец-то! success');
//     }
//     var user = {
//         firstName: firstName,
//         lastName: lastName,
//         email: email
//     };
//     console.log(user);
// }

$('#confirm').on('click', saySmth)
function saySmth() {

    var firstName = $('#firstName').val();
    var lastName = $('#lastName').val();
    var email = $('#email').val();

    var escapeFlag = false;

    if (firstName.length < 5) {
        $('#firstName').after('<br><em style="color:#ff0000">first name is too short</em>');
        $('#firstName').val('');
        escapeFlag = true;
    }

    if (lastName.length < 5) {
        $('#lastName').after('<br><em style="color:#ff0000">last name is too short</em>');
        $('#lastName').val('');
        escapeFlag = true;
    }

    if (email.length < 5) {
        $('#email').after('<br><em style="color:#ff0000">email name is too short</em>');
        $('#email').val('');
        escapeFlag = true;
    }

    if (escapeFlag) { return; }

    var user = {
        firstName: firstName,
        lastName: lastName,
        email: email
    };

    console.log(user);
    alert('Success');
};