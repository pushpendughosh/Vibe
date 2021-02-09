import React, { useRef } from 'react';
import { observer } from 'mobx-react-lite';
import Header from './header/Header';
import Dashboard from './dashboard/Dashboard';
import Search from './search/Search';
import HeaderBottom from './header/HeaderBottom';
import SearchHeader from './header/SearchHeader';
import { Grow } from '@material-ui/core';

type Props = {
};

const Home: React.FC<Props> = (props: Props) => {

    const scrollWindow: any = useRef(null);
    const [scrolled, setScrolled] = React.useState(0);

    const onScroll = () => {
        const currentScrollWindow = scrollWindow? scrollWindow.current: null;
        const scrollValue = currentScrollWindow? currentScrollWindow.scrollTop: 0;
        setScrolled(scrollValue)
    }

    return <>
        <div className="overflow-y-scroll h-screen" onScroll={onScroll} ref={scrollWindow}>
            <Header />
            <HeaderBottom />
            {scrolled > 170 && <SearchHeader />}
            <Search />
            <Dashboard />
        </div>
    </>
};

export default observer(Home);