var arr = [1, 5, 'bar', undefined, 6, 1, 'bar', undefined, 7, 6];

function unique(arr) {
    var result = [];
  
    nextInput: // nextInput это метка для continue... 
      for (var i = 0; i < arr.length; i++) {
        var str = arr[i]; 
        for (var j = 0; j < result.length; j++) {
          if (result[j] == str) continue nextInput; // ...для остановления итерации и перехода на новый круг
        }
        result.push(str);
      }
  
    return result;
  }
  console.log( unique(arr) );



var confirmButton = document.getElementById( 'confirm' );
confirmButton.addEventListener(  'click', saySmth);

function saySmth(event) {
    console.log(event);
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    if (firstName.length < 5) {
        alert('firstName is too short');
        document.getElementById('firstName').value = '';
        return;
    } else if (lastName.length < 5) {
        alert('lastName is too short');
        document.getElementById('lastName').value = '';
        return;
    } else if (email.length < 5) {
        alert('email is too short');
        document.getElementById('email').value = '';
        return;    
    } else {
        alert('Ну наконец-то! success');
    }
    var user = {
        firstName: firstName,
        lastName: lastName,
        email: email
    };
    console.log(user);
}