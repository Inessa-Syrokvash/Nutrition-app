# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


Задание - Создайте приложение Nutrition Analysis


Требование к приложению:

1) отобразить количество калорий и totalNutrients;
2) добавить alert, если пользователь ввел некорректные ингредиенты в поисковой строке;
3) добавить лоадер на время ожидания ответа от сервера
4) стилизовать ваше приложение, сделать мобильную адаптацию

ПОДСКАЗКИ:


1) внимательно изучите техническую документацию к API перед тем как приступать к его выполнению
https://developer.edamam.com/edamam-docs-nutrition-api 
Для тех, кто не знает английский рекомендую использовать мой любимый переводчик: https://www.deepl.com/translator?referrer=https%3A%2F%2Fwww.google.com%2F 


2) обратите внимание, что это POST запрос
поэтому дополнительно изучите как правильно оформить POST-запрос, он немного отличается, так как необходимо использовать method  и body
https://learn.javascript.ru/fetch?ysclid=li65qa8td1415776303 
Не пугайтесь, ничего сложного нет, просто внимательно читаем документацию пункта POST-запрос

3) Обратите внимание, как в технической документации необходимо отправить список ингредиентов (это поле обязательное и должно быть передано в body - это массив данных, где кол-во и продукт является его элементом
пример: ['2 avocado', '1 tomato'] - а пользователь пишет в поле инпут - 2 avocado, 1 tomato - поэтому вам понадобится метод split() и регулярное выражение, которое поможет преобразовать в строку в массив

4) Также обратите внимание, на тип данных который вернет вам API - ранее это был массив с 10 рецептами, посмотрите что вы получите в этот раз. Решить это вам поможет следующий дополнительный материал
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values 

5) лоадер можете использовать любой, можно взять на этом сайте
https://loading.io/css/ 
А вот над логикой его работы необходимо подумать