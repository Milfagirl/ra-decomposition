
import './App.css';
import Header from './component/header/Header';
import Content from './component/content/Content';
import Widget from './component/Widget';

function App() {
  const data = {
    header: {
      headerTitle: ['Сейчас в СМИ', 'В Москве', 'Рекомендуем'],
      headerNews: [
        { text: 'В Тегеране убит известный физик-ядерщик Мохсен Фахризаде', href: 'https://yandex.ru/news/story/V_Tegerane_ubit_izvestnyj_fizik-yadershhik_Mokhsen_Fakhrizade--0568159d06620b5d3e3754196dbd6f86?fan=1&from=main_portal&lang=ru&lr=172&mlid=1606503388.glob_225.0568159d&msid=1606504226.81778.85457.4337&persistent_id=120416467&stid=hEDivWzBHk3ETH-UYL0b&t=1606503388&utm_medium=topnews_news&utm_source=morda_desktop' },
        { text: 'Навальный предложил ЕС ввести санкции против богатейших россиян', href: 'https://yandex.ru/news/story/Navalnyj_predlozhil_ES_vvesti_sankcii_protiv_bogatejshikh_rossiyan--4be63ad9de6faa658cc7a3718fc755bb?fan=1&from=main_portal&lang=ru&lr=172&mlid=1606503388.glob_225.4be63ad9&msid=1606504226.81778.85457.4337&persistent_id=120348184&stid=88iVCG_zu6mi2XSPxXFU&t=1606503388&utm_medium=topnews_news&utm_source=morda_desktop' },
        { text: 'Немецкий врач назвал новую версию возникновения пандемии коронавируса', href: 'https://yandex.ru/news/story/Nemeckij_vrach_nazval_novuyu_versiyu_vozniknoveniya_pandemii_koronavirusa--3cb100412aa2df4d1da46458ff7da2c3?fan=1&from=main_portal&lang=ru&lr=172&mlid=1606503388.glob_225.3cb10041&msid=1606504226.81778.85457.4337&persistent_id=120407401&stid=SYniizo9p4r6ys8R78Qs&t=1606503388&utm_medium=topnews_news&utm_source=morda_desktop' },
        { text: 'Москва выразила протест в связи нарушением эсминцем США границы РФ', href: 'https://yandex.ru/news/story/Moskva_vyrazila_protest_v_svyazi_narusheniem_ehsmincem_SSHA_granicy_RF--02b96b97abcc45989d282846ec868086?fan=1&from=main_portal&lang=ru&lr=172&mlid=1606503388.glob_225.02b96b97&msid=1606504226.81778.85457.4337&persistent_id=120423297&stid=I9z7j6hkV4y6GxQCYkAt&t=1606503388&utm_medium=topnews_news&utm_source=morda_desktop' },
        { text: 'Для заболевших коронавирусом вводится единый телефонный номер', href: 'https://yandex.ru/news/story/Dlya_zabolevshikh_koronavirusom_vvoditsya_edinyj_telefonnyj_nomer--20d459de0512ecbaef52f1776c3d2c0d?fan=1&from=main_portal&lang=ru&lr=172&mlid=1606503388.glob_225.20d459de&msid=1606504226.81778.85457.4337&persistent_id=120400638&stid=zlsL9U2QqmsUVjeinhKW&t=1606503388&utm_medium=topnews_news&utm_source=morda_desktop' }
      ]
    },
    content: {
      contentList: [
        { img: 'https://yastatic.net/s3/home/services/block/video.svg', text: 'Видео'},
        { img: 'https://yastatic.net/s3/home/services/block/kartinki.svg', text: 'Картинки'},
        { img: 'https://yastatic.net/s3/home/services/block/news.svg', text: 'Новости'},
        { img: 'https://yastatic.net/s3/home/services/block/maps.svg', text: 'Карты'},
        { img: 'https://yastatic.net/s3/home/services/block/market_new.svg', text: 'Маркет'},
        { img: 'https://yastatic.net/s3/home/services/block/translate.svg', text: 'Переводчик'},
        { img: 'https://yastatic.net/s3/home/services/block/music1.svg', text: 'Музыка'}
      ],
      contentInput: {
        img : 'https://img.artlebedev.ru/everything/yandex/identity3/yandex3-anon.gif'
      }
    },
    widget: {
      img : 'https://avatars.mds.yandex.net/get-direct/2798850/pkqyDvDaj2DnKJ3_mm5MIw/wx300',
      href: 'https://shinaufa.ru/tyres/winter/studded/yokohama?utm_source=yandex&utm_medium=cpc&utm_term=%D0%BA%D1%83%D0%BF%D0%B8%D1%82%D1%8C%20%D1%88%D0%B8%D0%BD%D1%8B%20185%2060%20R15&utm_content=common_tgb_text1|cid_55952289|ad_9761631684|ph_22930383497&utm_campaign=Ufimskaya_shinnaya_kompaniya_Yokohama_Winter_2020_Network&yclid=7150922666596931992'
    }

  }
  return (
    <div className="App">
      <Header data={data.header} />
      <Content data={data.content} />
      <Widget data = {data.widget} />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
