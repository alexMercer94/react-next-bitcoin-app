const New = props => {
    const { urlToImage, url, title, description, source } = props.noticia;
    let image;
    if (urlToImage !== '') {
        image = <img src={urlToImage} alt={title} className="card-img-top" />;
    } else {
        image = (
            <img
                src="https://www.google.com.mx/url?sa=i&source=images&cd=&ved=2ahUKEwiAh4HErPHjAhUKKa0KHW8fDCYQjRx6BAgBEAQ&url=https%3A%2F%2Fhowfix.net%2Fcomputer%2Ffix-404not-found-error%2F&psig=AOvVaw0qD_u2ItNDvP6yxmE0jQ8L&ust=1565287499994901"
                alt={title}
                className="card-img-top"
            />
        );
    }

    return (
        <div className="col-md-6 col-12 mb-4">
            <div className="card">
                <div className="card-image">{image}</div>
                <div className="card-body">
                    <h3 className="card-title">{title}</h3>
                    <p className="card-text">{description}</p>
                    <p className="card-text">{source.name}</p>
                    <a href={url} target="_blank" className="btn btn-primary d-block">
                        Leer Noticia
                    </a>
                </div>
            </div>
        </div>
    );
};

export default New;
