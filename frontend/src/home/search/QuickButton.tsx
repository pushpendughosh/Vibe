import { Button } from "@material-ui/core";
import { observer } from "mobx-react-lite";

type Props = {
    onClick: any,
    title: string,
    selected: boolean
};

const QuickButton: React.FC<Props> = (props: Props) => {
    return (
    props.selected?
    <Button variant="contained" color="primary" 
    className="mr-1 md:mr-2 mt-1 md:mt-2 rounded-lg bg-red-900 text-red-200 shadow-xl text-xs"
    onClick={props.onClick}>
        {props.title}
    </Button>
    :
    <Button variant="contained" color="primary" 
    className="mr-1 md:mr-2 mt-1 md:mt-2 rounded-lg bg-red-200 text-black shadow-xl text-xs"
    onClick={props.onClick}>
        {props.title}
    </Button>
    )    
}
  
export default observer(QuickButton);;