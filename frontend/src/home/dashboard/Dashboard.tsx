import { observer } from "mobx-react-lite";
import EventCard from "./eventCard/EventCard";
import ModalWindow from "./modalPlayer/ModalWindow";
import { Events } from "./EventsData";

type Props = {
};

const Dashboard: React.FC<Props> = (props: Props) => {
    return <>
        <ModalWindow />
        <div className="pb-14 md:pb-0">
            {Events.map(event => {
                return <EventCard event={event} />
            })}
        </div>
    </>
}
  
export default observer(Dashboard);;