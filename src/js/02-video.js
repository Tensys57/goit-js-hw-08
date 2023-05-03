// Напиши скрипт, який буде зберігати поточний час відтворення відео у локальне сховище і, після перезавантаження сторінки, продовжувати відтворювати відео з цього часу.
// Вивчи документацію методу on() і почни відстежувати подію timeupdate - оновлення часу відтворення.
// Зберігай час відтворення у локальне сховище. Нехай ключем для сховища буде рядок "videoplayer-current-time".
// Під час перезавантаження сторінки скористайся методом setCurrentTime() з метою відновлення відтворення зі збереженої позиції.
// Додай до проекту бібліотеку lodash.throttle і зроби так, щоб час відтворення оновлювався у сховищі не частіше, ніж раз на секунду.
const PLAY_GO = 'videoplayer-current-time';
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');

const player = new Player(iframe);
let returnPoint = 0;
if (localStorage.getItem(PLAY_GO)) {
  returnPoint = localStorage.getItem(PLAY_GO);
}

const checkReturnPoint = function (data) {
  localStorage.setItem(PLAY_GO, data.seconds);
};
player.setCurrentTime(returnPoint);
player.on(`timeupdate`, throttle(checkReturnPoint, 1000));
