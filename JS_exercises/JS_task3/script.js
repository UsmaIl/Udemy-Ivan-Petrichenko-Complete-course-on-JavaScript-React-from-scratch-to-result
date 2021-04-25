/* Задание на урок:
1) Первую часть задания повторить по уроку
2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы
3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres
P.S. Функции вызывать не обязательно */

'use strict';

let numberOfFilms;

function start() {
    do {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
        if (numberOfFilms < 0) {
            alert("Ошибка! Количество просмтренных фильмов не может быть меньше 0");
        }
    } while (numberOfFilms === '' || numberOfFilms == null || isNaN(numberOfFilms) || numberOfFilms < 0);
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const lastWatchedMovie = prompt('Один из последних просмотренных фильмов?', ''),
            filmScore = prompt('На сколько оцените его?', '');

        if (lastWatchedMovie != null && filmScore != null &&
            lastWatchedMovie !== '' && filmScore !== '' &&
            lastWatchedMovie.length < 50) {
            personalMovieDB.movies[lastWatchedMovie] = filmScore;
        } else {
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}

detectPersonalLevel();

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`);
    }
}

writeYourGenres();