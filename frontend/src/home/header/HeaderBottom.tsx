import { Tab, Tabs } from "@material-ui/core";
import { observer } from "mobx-react-lite";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faHome, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import HomeStore from "../HomeStore";

type Props = {
};

const Header: React.FC<Props> = (props: Props) => {

    const handleChangeTab = (event: React.ChangeEvent<{}>, newTab: number) => {
      HomeStore.activeTab = newTab
    };

    return <>
        <div className="block md:hidden bg-white w-full fixed z-50 bottom-0 shadow-rxl">
      <Tabs
          value={HomeStore.activeTab}
          onChange={handleChangeTab}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
        >
          <Tab icon={<>
                <div className="text-2xl py-2"><FontAwesomeIcon icon={faHome}/></div>
            </>} className="py-1"/>
         
          <Tab icon={<>
                <div className="text-2xl py-2"><FontAwesomeIcon icon={faHeart}/></div>
              </>} className="py-1"/>
          
          <Tab icon={<>
              <div className="text-2xl py-2"><FontAwesomeIcon icon={faUserAlt}/></div>
            </>} className="py-1"/>
          
        </Tabs>
      </div>
    </>
  }
  
  export default observer(Header);;