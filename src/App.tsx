import hamburger from './images/foods/hamburger.jpg';
import homos from './images/foods/حمص.jpg';
import kashkBademjan from './images/foods/کشک بادمجان.jpg';
import kashkBademjanVgan from './images/foods/کشک بادمجان وگان.jpg';
import khorakAdasi from './images/foods/خوراک عدسی.jpg';
import khorakLobia from './images/foods/خوراک لوبیا.jpg';
import omlet from './images/foods/املت.jpg';
import sibZaminiVize from './images/foods/سیب زمینی ویژه.jpg';
import pitzaPeperoni from './images/foods/peperoni.jpg';
import pitzaMargarita from './images/foods/margarita.jpg';
import pitzaMakhlot from './images/foods/makhlot.jpg';
import pitzaGoshtOGarch from './images/foods/gost-o-garch.jpg';
import Header from './components/Header/Header';
import logo from './images/logo.png';
import Food_item from './components/main/Article/Food_item';
import QRcode from './components/footer/QRcode';
import './App.css';
import { useState } from 'react';

function App() {
  
  const [mode, setMode] = useState('increase');
  const toggleMode = () => {
    
    setMode(mode === 'increase' ? 'decrease' : 'increase');
    console.log(mode);
  }

  
  return (
  <body>
    <Header cafeName='café chi' instagram='cafechi1402' logo={logo} />
    <main onKeyUp={toggleMode}>
      <Food_item 
          foodName={'همبرگر'}
          description={'گوشت چرخ کرده+سبزیجات+سس'}
          foodImage={hamburger}
          price={120000}
          count={20}
          mode={mode}
        />
      <Food_item
        foodName={'حمص'}
        description={'نخود+ارده+ادویه+روغن زیتون'}
        foodImage={homos}
        price={110000}
        count={5}
        mode={mode}
      />

      <Food_item
        foodName={'کشک بادمجان'}
        description={'بادمجان کبابی+کشک+گردو+سیر داغ+پیاز داغ'} 
        foodImage={kashkBademjan} 
        price={90000} 
        count={5} 
        mode={mode}
      />
      <Food_item 
        foodName={'کشک بادمجان وگان'} 
        description={'بادمجان کبابی+کشک وگان+گردو+سیر داغ+پیاز داغ'} 
        foodImage={kashkBademjanVgan} 
        price={130000} 
        count={0} 
        mode={mode}
      />
      <Food_item 
        foodName={'خوراک عدسی'} 
        description={'عدس+سیب زمینی+روغن زیتون'} 
        foodImage={khorakAdasi} 
        price={60000} 
        count={15} 
        mode={mode}
      />
      <Food_item 
        foodName={'خوراک لوبیا'} 
        description={'لوبیا چیتی+قارچ+روغن زیتون'} 
        foodImage={khorakLobia} 
        price={60000} 
        count={15} 
        mode={mode}
      />
      <Food_item 
        foodName={'املت'} 
        description={'گوجه+دو عدد تخم مرغ'}
        foodImage={omlet} 
        price={60000} 
        count={-1} 
        mode={mode}
      />
      <Food_item
        foodName={'سیب زمینی ویژه'}
        description={'سیب زمینی سرخ شده+پنیر گودا'}
        foodImage={sibZaminiVize}
        price={90000}
        count={15}
        mode={mode}
      />
      <Food_item
        foodName={'پیتزای گوشت و قارچ'}
        description={'خمیر پیتزا + گوشت گوساله چرخ کرده + قارچ + پنیر پیتزا + فلفل دلمه ای'}
        foodImage={pitzaGoshtOGarch}
        price={210000}
        count={0}
        mode={mode}
      />
      <Food_item
        foodName={'پیتزای مخلوط'}
        description={'خمیر پیتزا + کالباس مارتا + کالباس خشک + قارچ + پنیر پیتزا + فلفل دلمه ای'}
        foodImage={pitzaMakhlot}
        price={170000}
        count={16}
        mode={mode}
      />
      <Food_item
        foodName={'پیتزای مارگاریتا'}
        description={'خمیر پیتزا + گوجه + ریحان + سیر + آویشن + پنیر پیتزا'}
        foodImage={pitzaMargarita}
        price={70000}
        count={14}
        mode={mode}
      />
      <Food_item
        foodName={'پیتزای پپرونی'}
        description={'خمیر پیتزا + پپرونی + قارچ + پنیر پیتزا + فلفل دلمه ای'}
        foodImage={pitzaPeperoni}
        price={180000}
        count={12}
        mode={mode}
      />
    </main>
    <footer>
      <QRcode instagram={'atishots'} description={'مجموعه عکس های طبیعت و محیط زیست'} />
      <QRcode instagram={'Fitgirl_colection'} description={'فروشگاه لباس های زنانه'} /> 
      <QRcode instagram={'imtaha_ir'} description={'آموزش برنامه نویسی'} />
    </footer>
  </body>

  );
}

export default App;
