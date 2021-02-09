import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@material-ui/core";
import { observer } from "mobx-react-lite";
import React from "react";

type Props = {
};

const SearchHeader: React.FC<Props> = (props: Props) => {

    return <>
        <div className="block md:hidden shadow-xl bg-white w-full fixed z-50 p-1">
            <div className="grid grid-cols-10 h-12">
                <input className="col-span-9 w-full text-lg px-3 md:border-l" type="text" placeholder="Search for place, event or vibe"/>
                <Button className="py-3 text-base font-medium text-gray-900 hover:text-gray-900 focus:outline-none min-w-min">
                    <FontAwesomeIcon className="text-xl" icon={faSearch}/>
                </Button>
            </div>
        </div>
    </>
}
  
export default observer(SearchHeader);;