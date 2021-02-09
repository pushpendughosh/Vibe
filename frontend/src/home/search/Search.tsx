import SearchBar from "./SearchBar";
import QuickButton from "./QuickButton";
import { observer } from "mobx-react-lite";
import QuickButtonGroup from "./QuickButtonGroup";
import Background from '../../media/bg-party-2.jpg';

type Props = {
};

const Search: React.FC<Props> = (props: Props) => {
    return (
    <div className="px-4 py-12 md:pt-40 md:pb-28 bg-pink-300" style={{ backgroundImage: `url(${Background})`, backgroundSize: "cover"}}>
        <div className="max-w-2xl mx-auto">
            <QuickButtonGroup titles={["Beach Party","Bonfire","Live Comedy"]}/>
            <SearchBar />
        </div>
    </div>
    )
}
  
export default observer(Search);;