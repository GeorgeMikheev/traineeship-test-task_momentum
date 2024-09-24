# traineeship-test-task_momentum

traineeship-test-task_momentum - это тестовое задание для стажировки в компании DIGITAL SECTOR. Для выполнения данной задачи необходимо реализовать веб-приложение momentum, аналог расширения. В приложении есть часы, дата, слайдер изображений, виджеты погоды, список задач.

___

## Инструкция по установки:

Для начала клонируйте данный репозиторий в свою директорию командой 'git clone'.

```
git clone git@github.com:GeorgeMikheev/traineeship-test-task_momentum.git
```

После чего перейдите по [ссылке](https://www.weatherbit.io/api/weather-current) и зарегистрируйтесь на данном сайте, что бы получить ключ.

Дальше нужно открыть проект в любом редакторе кода и в корневой папки создать файл '.env' и создать там переменную 'WTHR_API_KEY=' в значение которой записать ваш ключ.

```
WTHR_API_KEY=
```

Установите все зависимости:

```
npm i
```

И запустите проект:

```
npm run dev
```
___

## Описание кода и классов:

### index.js 
Входной файл куда импортируются все скрипты и стили необоходимые для работы проекта.

### main.js 
Главный файл. В нем создаются переменные и описывается логика работы всех классов.

### Блок погоды

#### Класс WeatherAPI
Данный класс необоходим для получения данных о погоде через API.
##### Имеет такие поля и медоды:
- lat и lon - принимают значения координат (ширины  и долготы) из geolocationApi.
- key - принимает значения ключа api из process.env.WTHR_API_KEY.
- getWeaterData() - медот, которые возвращает объект с данными о погоде.
