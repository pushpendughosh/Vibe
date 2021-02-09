import { Button, IconButton, Tab, Tabs, Tooltip } from "@material-ui/core";
import { observer } from "mobx-react-lite";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCalendar, faHeart, faHome, faPrescription, faStar, faUserAlt, faUserMd } from '@fortawesome/free-solid-svg-icons';
import HomeStore from "../HomeStore";

type Props = {
};

const Header: React.FC<Props> = (props: Props) => {

    const handleChangeTab = (event: React.ChangeEvent<{}>, newTab: number) => {
      HomeStore.activeTab = newTab
    };

    return <>
        <div className="hidden md:block shadow-xl bg-white w-full fixed z-50">
  <div className="max-w-7xl mx-auto px-4">
    <div className="flex items-center justify-center md:justify-start">
      <div className="w-0 flex-1 hidden md:block">
        <IconButton edge="start" href="#" color="inherit" aria-label="Logo">
          <img className="w-auto h-6" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Logo"/>
        </IconButton>
      </div>

      <nav className="flex">
        <Tabs
          value={HomeStore.activeTab}
          onChange={handleChangeTab}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tooltip title="Dashboard">
            <Tab icon={<>
                <div className="text-2xl py-2"><FontAwesomeIcon icon={faHome}/></div>
              </>} className="py-1"/>
          </Tooltip>
          <Tooltip title="Favourites">
            <Tab icon={<>
                <div className="text-2xl py-2"><FontAwesomeIcon icon={faHeart}/></div>
              </>} className="py-1"/>
          </Tooltip>
          <Tooltip title="Profile">
            <Tab icon={<>
                <div className="text-2xl py-2"><FontAwesomeIcon icon={faUserAlt}/></div>
              </>} className="py-1"/>
          </Tooltip>
        </Tabs>
      </nav>

      <div className="items-center justify-end flex-1 lg:w-0 hidden md:flex">
        <Button className="py-3 px-4 text-base font-medium text-gray-900 hover:text-gray-900 focus:outline-none">
            <FontAwesomeIcon className="text-2xl" icon={faBars}/>
        </Button>
        </div>
    </div>
  </div>
</div>
    </>
  }
  
  export default observer(Header);;