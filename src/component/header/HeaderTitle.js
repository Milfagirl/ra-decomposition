// Заголовок -> меню
export default function HeaderTitle (props) {
    const {data} = props 
    
    return (
        <ul class="list-group list-group-horizontal">
            {data.map((item) => (<button class="list-group-item">{item}</button>))}

        </ul>
    )
}