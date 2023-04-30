const container = document.createElement('div');
const title = document.createElement('h1');
const textarea = document.createElement('textarea');
const keyboard = document.createElement('div');
const about = document.createElement('p');
title.textContent = 'RSS Виртуальная клавиатура';
about.innerText = 'Клавиатура создана в операционной системе Windows\nДля переключения языка комбинация: Ctrl + Alt';
container.classList.add('container');
textarea.classList.add('text_area');
container.append(title, textarea, keyboard, about);
document.body.append(container);



const keysLayout = [
    {
      code: 'Backquote',
      char: { en: '`', ru: 'ё' },
      shift: { en: '~', ru: 'Ё' },
      typeId: { en: symbol, ru: letter },
    },
    {
      code: 'Digit1',
      char: { en: '1', ru: '1' },
      shift: { en: '!', ru: '!' },
      typeId: { en: digit, ru: digit },
    },
    {
      code: 'Digit2',
      char: { en: '2', ru: '2' },
      shift: { en: '@', ru: '"' },
      typeId: { en: digit, ru: digit },
    },
    {
      code: 'Digit3',
      char: { en: '3', ru: '3' },
      shift: { en: '#', ru: '№' },
      typeId: { en: digit, ru: digit },
    },
    {
      code: 'Digit4',
      char: { en: '4', ru: '4' },
      shift: { en: '$', ru: ';' },
      typeId: { en: digit, ru: digit },
    },
    {
      code: 'Digit5',
      char: { en: '5', ru: '5' },
      shift: { en: '%', ru: '%' },
      typeId: { en: digit, ru: digit },
    },
    {
      code: 'Digit6',
      char: { en: '6', ru: '6' },
      shift: { en: '^', ru: ':' },
      typeId: { en: digit, ru: digit },
    },
    {
      code: 'Digit7',
      char: { en: '7', ru: '7' },
      shift: { en: '&', ru: '?' },
      typeId: { en: digit, ru: digit },
    },
    {
      code: 'Digit8',
      char: { en: '8', ru: '8' },
      shift: { en: '*', ru: '*' },
      typeId: { en: digit, ru: digit },
    },
    {
      code: 'Digit9',
      char: { en: '9', ru: '9' },
      shift: { en: '(', ru: '(' },
      typeId: { en: digit, ru: digit },
    },
    {
      code: 'Digit0',
      char: { en: '0', ru: '0' },
      shift: { en: ')', ru: ')' },
      typeId: { en: digit, ru: digit },
    },
    {
      code: 'Minus',
      char: { en: '-', ru: '-' },
      shift: { en: '_', ru: '_' },
      typeId: { en: symbol, ru: symbol },
    },
    {
      code: 'Equal',
      char: { en: '=', ru: '=' },
      shift: { en: '+', ru: '+' },
      typeId: { en: symbol, ru: symbol },
    },
    {
      code: 'Backspace',
      char: { en: '⟵', ru: '⟵' },
      shift: { en: '⟵', ru: '⟵' },
      typeId: { en: func, ru: func },
    },
    {
      code: 'Tab',
      char: { en: 'tab', ru: 'tab' },
      shift: { en: 'tab', ru: 'tab' },
      typeId: { en: func, ru: func },
    },
    {
      code: 'KeyQ',
      char: { en: 'q', ru: 'й' },
      shift: { en: 'Q', ru: 'Й' },
      typeId: { en: letter, ru: letter },
    },
    {
      code: 'KeyW',
      char: { en: 'w', ru: 'ц' },
      shift: { en: 'W', ru: 'Ц' },
      typeId: { en: letter, ru: letter },
    },
    {
      code: 'KeyE',
      char: { en: 'e', ru: 'у' },
      shift: { en: 'E', ru: 'У' },
      typeId: { en: letter, ru: letter },
    },
    {
      code: 'KeyR',
      char: { en: 'r', ru: 'к' },
      shift: { en: 'R', ru: 'К' },
      typeId: { en: letter, ru: letter },
    },
    {
      code: 'KeyT',
      char: { en: 't', ru: 'е' },
      shift: { en: 'T', ru: 'Е' },
      typeId: { en: letter, ru: letter },
    },
    {
      code: 'KeyY',
      char: { en: 'y', ru: 'н' },
      shift: { en: 'Y', ru: 'Н' },
      typeId: { en: letter, ru: letter },
    },
    {
      code: 'KeyU',
      char: { en: 'u', ru: 'г' },
      shift: { en: 'U', ru: 'Г' },
      typeId: { en: letter, ru: letter },
    },
    {
      code: 'KeyI',
      char: { en: 'i', ru: 'ш' },
      shift: { en: 'I', ru: 'Ш' },
      typeId: { en: letter, ru: letter },
    },
    {
      code: 'KeyO',
      char: { en: 'o', ru: 'щ' },
      shift: { en: 'O', ru: 'Щ' },
      typeId: { en: letter, ru: letter },
    },
    {
      code: 'KeyP',
      char: { en: 'p', ru: 'з' },
      shift: { en: 'P', ru: 'З' },
      typeId: { en: letter, ru: letter },
    },
    {
      code: 'BracketLeft',
      char: { en: '[', ru: 'х' },
      shift: { en: '{', ru: 'Х' },
      typeId: { en: symbol, ru: letter },
    },
    {
      code: 'BracketRight',
      char: { en: ']', ru: 'ъ' },
      shift: { en: '}', ru: 'Ъ' },
      typeId: { en: symbol, ru: letter },
    },
    {
      code: 'Backslash',
      char: { en: '\\', ru: '\\' },
      shift: { en: '|', ru: '/' },
      typeId: { en: symbol, ru: symbol },
    },
    {
      code: 'Delete',
      char: { en: 'del', ru: 'del' },
      shift: { en: 'del', ru: 'del' },
      typeId: { en: func, ru: func },
    },
    {
      code: 'CapsLock',
      char: { en: 'caps lock', ru: 'caps lock' },
      shift: { en: 'caps lock', ru: 'caps lock' },
      typeId: { en: func, ru: func },
    },
    {
      code: 'KeyA',
      char: { en: 'a', ru: 'ф' },
      shift: { en: 'A', ru: 'Ф' },
      typeId: { en: letter, ru: letter },
    },
    {
      code: 'KeyS',
      char: { en: 's', ru: 'ы' },
      shift: { en: 'S', ru: 'Ы' },
      typeId: { en: letter, ru: letter },
    },
    {
      code: 'KeyD',
      char: { en: 'd', ru: 'в' },
      shift: { en: 'D', ru: 'В' },
      typeId: { en: letter, ru: letter },
    },
    {
      code: 'KeyF',
      char: { en: 'f', ru: 'а' },
      shift: { en: 'F', ru: 'А' },
      typeId: { en: letter, ru: letter },
    },
    {
      code: 'KeyG',
      char: { en: 'g', ru: 'п' },
      shift: { en: 'G', ru: 'П' },
      typeId: { en: letter, ru: letter },
    },
    {
      code: 'KeyH',
      char: { en: 'h', ru: 'р' },
      shift: { en: 'H', ru: 'Р' },
      typeId: { en: letter, ru: letter },
    },
    {
      code: 'KeyJ',
      char: { en: 'j', ru: 'о' },
      shift: { en: 'J', ru: 'О' },
      typeId: { en: letter, ru: letter },
    },
    {
      code: 'KeyK',
      char: { en: 'k', ru: 'л' },
      shift: { en: 'K', ru: 'Л' },
      typeId: { en: letter, ru: letter },
    },
    {
      code: 'KeyL',
      char: { en: 'l', ru: 'д' },
      shift: { en: 'L', ru: 'Д' },
      typeId: { en: letter, ru: letter },
    },
    {
      code: 'Semicolon',
      char: { en: ';', ru: 'ж' },
      shift: { en: ':', ru: 'Ж' },
      typeId: { en: symbol, ru: letter },
    },
    {
      code: 'Quote',
      char: { en: "'", ru: 'э' },
      shift: { en: '"', ru: 'Э' },
      typeId: { en: symbol, ru: letter },
    },
    {
      code: 'Enter',
      char: { en: 'enter', ru: 'enter' },
      shift: { en: 'enter', ru: 'enter' },
      typeId: { en: func, ru: func },
    },
    {
      code: 'ShiftLeft',
      char: { en: 'shift', ru: 'shift' },
      shift: { en: 'shift', ru: 'shift' },
      typeId: { en: func, ru: func },
    },
    {
      code: 'KeyZ',
      char: { en: 'z', ru: 'я' },
      shift: { en: 'Z', ru: 'Я' },
      typeId: { en: letter, ru: letter },
    },
    {
      code: 'KeyX',
      char: { en: 'x', ru: 'ч' },
      shift: { en: 'X', ru: 'Ч' },
      typeId: { en: letter, ru: letter },
    },
    {
      code: 'KeyC',
      char: { en: 'c', ru: 'с' },
      shift: { en: 'C', ru: 'С' },
      typeId: { en: letter, ru: letter },
    },
    {
      code: 'KeyV',
      char: { en: 'v', ru: 'м' },
      shift: { en: 'V', ru: 'М' },
      typeId: { en: letter, ru: letter },
    },
    {
      code: 'KeyB',
      char: { en: 'b', ru: 'и' },
      shift: { en: 'B', ru: 'И' },
      typeId: { en: letter, ru: letter },
    },
    {
      code: 'KeyN',
      char: { en: 'n', ru: 'т' },
      shift: { en: 'N', ru: 'Т' },
      typeId: { en: letter, ru: letter },
    },
    {
      code: 'KeyM',
      char: { en: 'm', ru: 'ь' },
      shift: { en: 'M', ru: 'Ь' },
      typeId: { en: letter, ru: letter },
    },
    {
      code: 'Comma',
      char: { en: ',', ru: 'б' },
      shift: { en: '<', ru: 'Б' },
      typeId: { en: symbol, ru: letter },
    },
    {
      code: 'Period',
      char: { en: '.', ru: 'ю' },
      shift: { en: '>', ru: 'Ю' },
      typeId: { en: symbol, ru: letter },
    },
    {
      code: 'Slash',
      char: { en: '/', ru: '.' },
      shift: { en: '?', ru: ',' },
      typeId: { en: symbol, ru: symbol },
    },
    {
      code: 'ArrowUp',
      char: { en: '˄', ru: '˄' },
      shift: { en: '˄', ru: '˄' },
      typeId: { en: symbol, ru: symbol },
    },
    {
      code: 'ShiftRight',
      char: { en: 'shift', ru: 'shift' },
      shift: { en: 'shift', ru: 'shift' },
      typeId: { en: func, ru: func },
    },
    {
      code: 'ControlLeft',
      char: { en: 'ctrl', ru: 'ctrl' },
      shift: { en: 'ctrl', ru: 'ctrl' },
      typeId: { en: func, ru: func },
    },
    {
      code: 'AltLeft',
      char: { en: 'alt', ru: 'alt' },
      shift: { en: 'alt', ru: 'alt' },
      typeId: { en: func, ru: func },
    },
    {
      code: 'Space',
      char: { en: ' ', ru: ' ' },
      shift: { en: ' ', ru: ' ' },
      typeId: { en: symbol, ru: symbol },
    },
    {
      code: 'AltRight',
      char: { en: 'alt', ru: 'alt' },
      shift: { en: 'alt', ru: 'alt' },
      typeId: { en: func, ru: func },
    },
    {
      code: 'ArrowLeft',
      char: { en: '<', ru: '<' },
      shift: { en: '<', ru: '<' },
      typeId: { en: symbol, ru: symbol },
    },
    {
      code: 'ArrowDown',
      char: { en: '˅', ru: '˅' },
      shift: { en: '˅', ru: '˅' },
      typeId: { en: symbol, ru: symbol },
    },
    {
      code: 'ArrowRight',
      char: { en: '>', ru: '>' },
      shift: { en: '>', ru: '>' },
      typeId: { en: symbol, ru: symbol },
    },
    {
      code: 'ControlRight',
      char: { en: 'ctrl', ru: 'ctrl' },
      shift: { en: 'ctrl', ru: 'ctrl' },
      typeId: { en: func, ru: func },
    },
];