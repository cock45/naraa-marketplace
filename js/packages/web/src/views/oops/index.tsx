import { Link } from 'react-router-dom';
import { Button } from 'antd';

export const OopsView = () => {
    return (
        <>
        <div className="oopsPage">
            <div className="info">
                <h1>404 Not Found</h1>
                <h2>We can't find that page</h2>
                <p>We're fairly sure that page used to be here, but seems to have gone missing. We do apologise on it's behalf.</p>
                <Button><Link to={`/`} rel="noreferrer noopener">Home</Link></Button>
            </div>
        </div>
        </>
    );
};