import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <h2 className="text-5xl text-center font-semibold mt-16">Oops!!! The page does not exist</h2>
            <div className="text-3xl text-center font-semibold mt-10">
                <Link to='/'>Go Back</Link>
            </div>
        </div>
    );
};

export default ErrorPage;