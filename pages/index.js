import MasterPage from '../components/Master';
import fetch from 'isomorphic-unfetch';
import Price from '../components/Price';
import News from '../components/News';
import Events from '../components/Events';

const Index = props => (
    <MasterPage>
        <div className="row">
            <div className="col-12">
                <h2>Precio del Bitcoin</h2>
                <Price precio={props.bitcoinPrice} />
            </div>
            <div className="col-md-8">
                <h2 className="my-4">Noticias sobre Bitcoin</h2>
                <News noticias={props.noticias} />
            </div>
            <div className="col-md-4">
                <h2 className="my-4">Próximos eventos Bitcoin</h2>
                <Events eventos={props.eventos} />
            </div>
        </div>
    </MasterPage>
);

/**
 * Fetch API using server side rendering
 */
Index.getInitialProps = async () => {
    const today = new Date();
    const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    // Info Bitcoin API
    const price = await fetch('https://api.coinmarketcap.com/v2/ticker/1/');
    // News about Bitcoin API
    const news = await fetch(
        `https://newsapi.org/v2/everything?q=bitcoin&from=${date}&sortBy=publishedAt&apiKey=6f53d49d565d4b588c0b88486730652f`
    );
    // Events about Bitcoin API
    const events = await fetch(
        'https://www.eventbriteapi.com/v3/events/search/?q=Bitcoin&sort_by=date&location.address=Mexico&token=EKM3ASZWQNIMGRZHDLNB'
    );

    const responsePrice = await price.json();
    const responseNews = await news.json();
    const responseEvents = await events.json();

    return {
        bitcoinPrice: responsePrice.data.quotes.USD,
        noticias: responseNews.articles,
        eventos: responseEvents.events
    };
};

export default Index;
