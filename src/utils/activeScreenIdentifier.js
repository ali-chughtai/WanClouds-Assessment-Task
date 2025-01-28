import { useLocation } from 'react-router-dom';

export default function ActiveScreenIdentifier() {
    const location = useLocation();
    const currentURL = location.pathname;
    // console.log(currentURL);
    return currentURL;
}
