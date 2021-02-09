import { faMapMarkerAlt, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@material-ui/core";
import { observer } from "mobx-react-lite";

type Props = {
};

const SearchBar: React.FC<Props> = (props: Props) => {
    return (
    <div className="shadow-xl rounded-xl py-2 px-3 bg-white grid grid-cols-12">
        <div className="col-span-12 md:col-span-4 flex items-center h-12">
            <FontAwesomeIcon className="text-xl ml-3" icon={faMapMarkerAlt}/>
            <input className="w-full h-full rounded-xl text-lg px-3 ml-2 placeholder-gray-900" type="text" placeholder="North Goa, India"/>
        </div>
        <div className="col-span-12 md:col-span-8 grid grid-cols-10 border-t md:border-t-0 h-12">
            <input className="col-span-9 w-full text-lg px-3 md:border-l" type="text" placeholder="Search for place, event or vibe"/>
            <Button className="py-3 text-base font-medium text-gray-900 hover:text-gray-900 focus:outline-none min-w-min">
                <FontAwesomeIcon className="text-xl" icon={faSearch}/>
            </Button>
        </div>
    </div>
    )
}
  
export default observer(SearchBar);;