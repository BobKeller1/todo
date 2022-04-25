# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


## JUST DO IT

В приложении используется **React**, **Redux toolkit**, **Typescript**, **Styled components** и стили некоторых компонентов взяты из **Bootstrap**.
Для dropdown`a используется библиотека **react-dropdown-select**.
Есть кастомный хук для инпутов (UseInput) и компонента для SVG.

При просмотре форматирования кода возможно кровоизлияние из глаз(на домашнем копьютере отказался заводиться Prettier или ESlint), так что вы предупреждены.

По реализации: сразу заметно, что приложение требует рефакторинга в плане выноса логики из компонент как минимум в контейнеры родители, а лучше на уровень выше, но за недостатком свободного времени реализация пока такая :)

RootReducer также можно разделить на несколько и не держать всю логику в одном месте.

Хук для пагинации не самописный, информацию и пример можно найти [тут](https://dev.to/damiisdandy/pagination-in-javascript-and-react-with-a-custom-usepagination-hook-1mgo)

TypeScript используется для минимальной типизации сущностей в сторе, пропсов и аргументов функций.

В приложении реализована возможность добавления / редактирования / удаления задач, фильтрация выполняется по всем полям, кроме описания(к сожалению не успел реализовать строку поиска, так можно было бы фильтровать и по названию), реализована корзина и пагинация, данных сохраняются и загружаются из LocalStorage.
Верстал под разрежение Iphone SE, до 360px все смотрится нормально, ниже  - не ручаюсь :), верстка на десктопе ограничена контейнером в 1200px.
В техзадании ничего не сказано про валидацию полей, поэтому в приложении её нет, единственное, что если не введена никакая дата, то за дату окончания будет принято значение Date.now().

По багам: пока тестировал функционал, то ничего не заметил

Из нового практически ничего не узнал, но пришлось повспоминать, как работать с датой и LocalStorage.

Благодарю за возможность выполнения тестового задания и обратную связь по поводу багов!
