// строка поиска
export default function ContentInput(props) {
    const {data} = props;
    return (
        <div className='content-input'>
            <img src = {data.img} alt ='logo'></img>
            <form>
                <input placeholder = 'найдется все...'></input>
                <button>Найти</button>
            </form>
        </div>

    )
}