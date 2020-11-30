// Заголовок -> Новости
export default function HeaderNews(props) {
    const { data } = props;
    return (
        <ul class="list-group header-news">
            {data.map((item) => (<a href={item.href} class="list-group-item list-group-item-action">{item.text}</a>))}
        </ul>
    )
}