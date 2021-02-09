import React from 'react';
import { observer } from "mobx-react-lite";
import QuickButton from "./QuickButton";

type Props = {
    titles: string[]
};

const QuickButtonGroup: React.FC<Props> = (props: Props) => {
    const [selectedButtons, setSelectedButtons] = React.useState(0);
    const toggleSelect = (title: string) => {

    }

    return <div className="py-4">
            {props.titles.map(title => {
                return <QuickButton title={title} onClick={toggleSelect(title)} selected={true}/>
            })}
        </div>
}
  
export default observer(QuickButtonGroup);;