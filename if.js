var surname = prompt('Ведите вашу фамилию'),
    name = prompt('Введите ваше имя'),
    secondName = prompt('Введите ваше отчество'),
    age = requestAge('Сколько вам лет'),
    gender = confirm('Ваш пол: мужской?');

var fullName = ' ' + surname + ' ' + name + ' ' + secondName,
    ageDays = age * 365,
    ageFrom = age + 5,
    resultGender,
    resultRetire;
function requestAge(querty) {
    do {
        age = Number(prompt(querty));
    } while (isNaN(age) || age < 0);
    return age;
}
if (gender){
    resultGender = ('Ваш пол: мужской');
}else {
    resultGender = ('Ваш пол: женский');
}
if (gender && age > 62 || !gender && age > 57){
    resultRetire = ('Вы на пенсии: да');
}else {
    resultRetire = ('Вы на пенсии: нет');
}
alert('Ваше ФИО:' + fullName + '\r\nВаш возраст в годах: ' + age + '\r\nВаш возраст в днях: ' + ageDays + '\r\nЧерез 5 лет вам будет: ' + ageFrom + '\r\n' + resultGender + '\r\n' + resultRetire);
