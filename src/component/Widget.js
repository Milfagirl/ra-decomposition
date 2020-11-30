//баннер с рекламой

export default function Widget(props) {
    const { data } = props;
    return (
      <div className='widget'>
          <img src = {data.img} alt = 'widget'></img>
          <a href = '{data.href}'>Зимние шины  YOKOHAMA</a>
      </div>
)
}