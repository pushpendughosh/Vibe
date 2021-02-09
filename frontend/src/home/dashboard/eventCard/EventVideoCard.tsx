import React from 'react';
import { observer } from "mobx-react-lite";
import { Button, Grow } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faPlay } from '@fortawesome/free-solid-svg-icons';
import HomeStore from '../../HomeStore';

type Props = {
    url: string
};

const EventVideoCard: React.FC<Props> = (props: Props) => {
    const [moreInfo, setMoreInfo] = React.useState(false);
    function showMoreInfo(){
        setMoreInfo(true);
    }
    function hideMoreInfo(){
        setMoreInfo(false);
    }
    const openEventVideoModal = () => {
        HomeStore.activeEventDisplay = 1;
    }
    return <>
        <div className="cursor-pointer mr-4 my-4 md:my-6 shadow-xl rounded-md h-52 md:h-60 w-52 md:w-60 bg-contain bg-center bg-no-repeat zoomer relative" 
            style={{backgroundImage: `url(${props.url})`}}
            onMouseEnter={showMoreInfo} onMouseLeave={hideMoreInfo} 
            onClick={openEventVideoModal}
        >
            <div className="top-14 left-0 absolute w-52 md:w-60 h-24 md:h-32 z-10 flex items-center justify-center">
               <Button className="bg-gray-900 bg-opacity-70 rounded-xl px-6 py-3">
                   <FontAwesomeIcon className="text-white text-2xl" icon={faPlay}/>  
               </Button>
            </div> 

            {moreInfo && <Grow in={moreInfo}>
            <div className="left-0 absolute w-52 md:w-60 h-8 bg-gray-900 bg-opacity-70 z-10 rounded-t text-white text-xs grid grid-cols-2 p-1">
                <div className="p-1">6 March 2020</div>
                <div className="text-right">
                    <Button className="min-w-min p-0">
                        <FontAwesomeIcon className="text-red-500 mr-1 text-2xl shadow-xl" icon={faHeart}/>
                    </Button>
                </div>
            </div>
            </Grow>}

            {moreInfo && <Grow in={moreInfo}>
            <div className="bottom-0 left-0 absolute w-52 md:w-60 h-8 bg-gray-900 bg-opacity-70 z-10 rounded-b text-center text-white text-xs p-2">
                <div>
                    <FontAwesomeIcon className="text-red-500 mr-1" icon={faHeart}/> 
                    <span>7563</span>
                </div>    
            </div>
            </Grow>}
            
        </div>
    </>
}
  
export default observer(EventVideoCard);;