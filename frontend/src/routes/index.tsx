import type {FC} from 'react';
import {useEffect} from 'react';
import {Navigate, Route, Routes, useLocation} from 'react-router-dom';
import Home from '../components/Home.tsx';

const IndexRoutes: FC = () => {
    const {hash, pathname} = useLocation();

    useEffect(() => {
        if (!hash) {
            window.scrollTo(0, 0);
        }
    }, [hash, pathname]);

    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>
    );
};

export default IndexRoutes;