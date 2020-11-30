export default function ContentList (props) {
    const {data} = props;
    return (
        <ul className = 'content-list'>
            {data.map (item => {
                return (
                    <div>
                        <img src = {item.img} alt = {item.text}></img>
                        <div>{item.text}</div>
                    </div>
                )
            })}
        </ul>
    )
}