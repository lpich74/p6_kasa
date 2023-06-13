import '../styles/Tags.css';

function Tags({tags}) {
    return (
        <ul className='tags-list'>
            {tags.map((tag, index) => (
                <li className='tag' key={index}>{tag}</li>
            ))}
        </ul>
    )
}

export default Tags