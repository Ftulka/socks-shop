const React = require('react');
const Layout = require('./Layout');

function Generator() {
  
  return (
    <Layout>
         <script defer src="/js/generator.js"></script>
         <h1>Генератор носков</h1>
      <div className="generator">
        <label htmlFor="color">Выберите цвет:</label>
        <select id="color">
          <option value="white">Белый</option>
          <option value="yellow">Желтый</option>
          <option value="purple">Фиолетовый</option>
          <option value="pink">Розовый</option>
          <option value="green">Салатовый</option>
          <option value="blue">Голубой</option>
        </select>
        
        <label htmlFor="pattern">Выберите узор:</label>
        <select id="pattern">
          <option value="pattern1">Узор 1</option>
          <option value="pattern2">Узор 2</option>
          <option value="pattern3">Узор 3</option>
        </select>
        
        <label htmlFor="image">Выберите картинку:</label>
        <select id="image">
          <option value="image1">Картинка 1</option>
          <option value="image2">Картинка 2</option>
          <option value="image3">Картинка 3</option>
        </select>

        <div className="preview">
            <svg id="sock" width="100" height="150" xmlns="http://www.w3.org/2000/svg">
                <use xlinkHref="img/sock.svg" />
            </svg>
        </div>

        {/* <button onClick={addToFavorites}>Добавить в избранное</button>
        <button onClick={addToCart}>Добавить в корзину</button> */}
        <button onClick>Добавить в избранное</button>
        <button onClick>Добавить в корзину</button>
      </div>
    </Layout>
  );
}

module.exports = Generator;
