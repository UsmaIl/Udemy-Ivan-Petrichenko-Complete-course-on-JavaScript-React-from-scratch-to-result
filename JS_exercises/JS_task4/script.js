/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку.
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены -
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        do {
            this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
            if (this.count < 0) {
                alert("Ошибка! Количество просмтренных фильмов не может быть меньше 0");
            }
        } while (this.count === '' || this.count == null || isNaN(this.count) || this.count < 0);
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const lastWatchedMovie = prompt('Один из последних просмотренных фильмов?', ''),
                filmScore = prompt('На сколько оцените его?', '');

            if (lastWatchedMovie != null && filmScore != null &&
                lastWatchedMovie !== '' && filmScore !== '' &&
                lastWatchedMovie.length < 50) {
                this.movies[lastWatchedMovie] = filmScore;
            } else {
                i--;
            }
        }
    },
    detectPersonalLevel: function () {
        if (this.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (this.count >= 10 && this.count < 30) {
            console.log("Вы классический зритель");
        } else if (this.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(this);
        }
    },
    toggleVisibleMyDB: function () {
        this.privat = !this.privat;
    },
    writeYourGenres: function () {
        for (let i = 0; i < 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i + 1}`);

            if (genre === '' || genre == null) {
                console.log('Вы ввели некорректные данные или не ввели их вовсе');
                i--;
            } else {
                this.genres[i] = genre;
            }
        }
        this.genres.forEach((item, i) => console.log(`Любимый жанр ${i + 1} - это ${item}`));
    },
};

