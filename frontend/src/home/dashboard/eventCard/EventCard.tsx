import React, { useRef } from 'react';
import { faChevronRight, faChevronLeft, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@material-ui/core";
import { observer } from "mobx-react-lite";
import titos1 from '../../../media/titos-1.jpg';
import titos2 from '../../../media/titos-2.jpg';
import EventVideoCard from './EventVideoCard';
import RateCard from './RateCard';

type Props = {
    event: any
};

const EventCard: React.FC<Props> = (props: Props) => {

    const scrollWindow: any = useRef(null);
    const [scrolled, setScrolled] = React.useState(0);

    const onScroll = () => {
        const currentScrollWindow = scrollWindow? scrollWindow.current: null;
        const scrollValue = currentScrollWindow? currentScrollWindow.scrollLeft: 0;
        setScrolled(scrollValue)
    }

    return <>
        <div className="border-b">
            <div className="tracking-tight truncate text-4xl text-gray-800 pt-8 pb-2 px-4 md:px-6">{props.event.name}</div>
            <RateCard rating={props.event.rating} vibeCount={props.event.ratingCount}/>
            <div className="relative">
                <div className="overflow-x-auto" onScroll={onScroll} ref={scrollWindow}>
                    <div className="inline-flex ml-4 md:ml-6">
                        <EventVideoCard url={titos1}/>
                        <EventVideoCard url={titos2}/>
                        <EventVideoCard url={titos2}/>
                        <EventVideoCard url={titos1}/>
                        <EventVideoCard url={titos2}/>
                        <EventVideoCard url={titos1}/>
                        <EventVideoCard url={titos1}/>
                        <EventVideoCard url={titos2}/>
                        <EventVideoCard url={titos2}/>
                        <EventVideoCard url={titos1}/>
                        <EventVideoCard url={titos2}/>
                        <EventVideoCard url={titos2}/>
                        <EventVideoCard url={titos1}/>
                        <EventVideoCard url={titos2}/>
                    </div>
                </div>
                {scrolled > 18 && <div className="top-0 left-0 absolute h-52 md:h-60 w-20 mt-4 md:mt-6 flex items-center z-20">
                    <Button className="bg-gradient-to-r from-gray-900 to-transparent min-w-min h-52 md:h-60 w-12 md:w-20 rounded-none">
                        <FontAwesomeIcon className="text-white text-4xl md:text-6xl max-w-min" icon={faChevronLeft}/>  
                    </Button>
                </div>}
                <div className="top-0 right-0 absolute h-52 md:h-60 w-20 mt-4 md:mt-6 flex items-center justify-end z-20">
                    <Button className="bg-gradient-to-r from-transparent to-gray-900 min-w-min h-52 md:h-60 w-12 md:w-20 rounded-none">
                        <FontAwesomeIcon className="text-white text-4xl md:text-6xl max-w-min" icon={faChevronRight}/>  
                    </Button>
                </div>
            </div>
        </div>
    </>
}
  
export default observer(EventCard);;