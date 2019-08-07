import New from './New';

const News = props => {
    return (
        <div className="row">
            {props.noticias.map(noticia => (
                <New noticia={noticia} />
            ))}
        </div>
    );
};

export default News;
