import { useEffect, useState } from "react";
import { Route, Link, useHistory } from 'react-router-dom';
// import CeoDetails from './CeoDetails';
import CeoDetailsAsync from './CeoDetailsAsync';

const CeoList = () => {
    const [ceos, setCeos] = useState([]);
    const history = useHistory();

    useEffect(() => {
        (async () => {
            const ceos = await _fetchData();
            setCeos(ceos)
        })();

    }, [setCeos]);
    const _fetchData = async () => {
        const url = 'http://127.0.0.1:3333/';
        const response = await fetch(url).then(response => response.json());
        console.log('Response: ', response);
        return response;
    };
    return (
        <>
            {!!ceos.length ? (
                <>
                    <Route exact path='/'>
                        <ul>
                            {ceos.map((ceos, index) => <li key={index}>
                                <Link to={`/${ceos.slug}`}>
                                    {ceos.name}
                                </Link>
                            </li>)}
                        </ul>
                    </Route>
                    <Route path='/:ceo_slug'>
                        {/* <CeoDetails ceoList={ceos} /> */}
                        <CeoDetailsAsync />
                        <button type="button" onClick={() => history.goBack()}>Back Home</button>
                    </Route>
                </>
            ) : (
                <p>Loading CEOs from api...</p>
            )}
        </>
    )
}

export default CeoList;