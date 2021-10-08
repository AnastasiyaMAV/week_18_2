//querySelectorAll найдет в документе поле с классом showPassword и передаст её в переменну
const showPassword = document.querySelectorAll('.showPassword'); 

//С помощью цикла forEach пройдемся по элементу с паролем и повесим обработчик событий 
//addEventListener, который отловит клик и сработает функция
showPassword.forEach(item => item.addEventListener('click', function (event) {
    //Метод closest() возвращает ближайший родительский элемент с классом inputs, внутри 
    //которого несколько полей, которые будут работать независимо друг от друга. 
    //Вся эта конструкция, начиная с ключевого слова this отправляется в переменную input.
    let input = this.closest('.inputs').querySelector('.password');
    //Если текущий тип поля password (чекбокс отмечен), то поменять его на текстовый тип. 
    if (input.type === 'password') {
        input.type = 'text';
    //В противном случае оставить, как есть.    
    } else {
        input.type = 'password';
    }
}))

let validateNickName = (nickNameField) => {
    let nickNameFormat = /^[a-z0-9_-]{3,16}$/;
    // console.log(nickNameFormat);
    // console.log(nickNameField.match(nickNameFormat));
    if (nickNameField.match(nickNameFormat)) {
        return true;
    }
    else {
        alert("Ваш Никнем введен некорректно! (Допустимы только строчные латинские буквы, цифры, нижнее подчеркивание, тире. Кол-во символов от 3 до 16.)");
        document.getElementById('formGroupNickname').value = "";
        return false;
    }
}

let validateEmail = (emailField) => {
    let mailFormat = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
    //console.log(mailFormat);
    //console.log(emailField.match(mailFormat));
    if (emailField.match(mailFormat)) {
        return true;
    }
    else {
        alert("Ваш адрес электронной почты введен неверно! (Пример: example-678@mail.com)");
        document.getElementById('exampleInputEmail').value = "";
        return false;
    }
}

let validatePassword = (passwordField) => {
    let passwordFormat = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
    // console.log(passwordFormat);
    // console.log(passwordField.match(passwordFormat));
    if (passwordField.match(passwordFormat)) {
        return true;
    }
    else {
        alert("Ваш пароль некорректен! Пароль должен содержать строчные и прописные латинские буквы, цифры, спецсимволы. Минимум 8 символов" );
        document.getElementById('exampleInputPassword1').value = "";
        document.getElementById('showInputPassword').checked = false;
        document.querySelector('.password').type = 'password';
        return false;
    }
    
}

let validatePhone = (phoneField) => {
    let phoneFormat = /^((8|\+7)[\- ]?)?(\(?\d{3,4}\)?[\- ]?)?[\d\- ]{5,10}$/;
    // console.log(phoneFormat);
    // console.log(phoneField.match(phoneFormat));
    if (phoneField.match(phoneFormat)) {
        return true;
    }
    else {
        alert("Ваш телефон некорректен! Примеры: +7 xxx xxx xx xx" );
        document.getElementById('exampleInputTel').value = ""
        return false;
    }
}

const cheakInput = () => {
    let nickName = document.getElementById('formGroupNickname').value;
    let email = document.getElementById('exampleInputEmail').value;
    let password = document.getElementById('exampleInputPassword1').value;
    let tel = document.getElementById('exampleInputTel').value;
    
    if(validateNickName(nickName) == false){
        return;
    } else if(validateEmail(email) == false){
        return;
    } else if(validatePassword(password) == false){
        return;
    } else if(validatePhone(tel) == false){
        return;
    } else {
        alert(`Добро пожаловать, ${nickName}!`);
    }
    
    document.getElementById('formGroupNickname').value = "";
    document.getElementById('exampleInputEmail').value = "";
    document.getElementById('exampleInputPassword1').value = "";
    document.getElementById('showInputPassword').checked = false;
    document.querySelector('.password').type = 'password';
    document.getElementById('exampleInputTel').value = "";

}
