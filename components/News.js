import New from './New';

const News = props => {
    return (
        <div className="row">
            {props.noticias ? (
                props.noticias.map(noticia => <New key={noticia.publishedAt} noticia={noticia} />)
            ) : (
                <div>Error</div>
            )}
        </div>
    );
};

export default News;
