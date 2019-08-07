import MasterPage from '../components/Master';
import fetch from 'isomorphic-unfetch';
import Price from '../components/Price';
import News from '../components/News';

const Index = props => (
    <MasterPage>
        <div className="row">
            <div className="col-12">
                <h2>Precio del Bitcoin</h2>
                <Price precio={props.bitcoinPrice} />
            </div>
            <div className="col-md-8">
                <h2>Noticias sobre Bitcoin</h2>
                <News noticias={props.noticias} />
            </div>
            <div className="col-md-4">
                <h2>Próximos eventos Bitcoin</h2>
            </div>
        </div>
    </MasterPage>
);

/**
 * Fetch API using server side rendering
 */
Index.getInitialProps = async () => {
    const price = await fetch('https://api.coinmarketcap.com/v2/ticker/1/');
    const news = await fetch(
        'https://newsapi.org/v2/everything?q=bitcoin&from=2019-07-07&sortBy=publishedAt&apiKey=1227179dcc51439ab68790381a9bca3b&language=es'
    );

    const responsePrice = await price.json();
    const responseNews = await news.json();

    return {
        bitcoinPrice: responsePrice.data.quotes.USD,
        noticias: responseNews.articles
    };
};

export default Index;
