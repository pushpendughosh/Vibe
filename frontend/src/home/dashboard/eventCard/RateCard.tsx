import { faStar, faStarHalf, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { observer } from "mobx-react-lite";

type Props = {
    rating: number,
    vibeCount: number
};

const RateCard: React.FC<Props> = (props: Props) => {
    const yellowStars: number = Math.floor(Math.round(props.rating*2)/2)
    const halfStars: number = Math.round(props.rating*2)%2
    const greyStars: number = 5 - yellowStars - halfStars

    return <>
        <div className="my-2 h-8 flex items-center px-4 md:px-6">
            <div className="font-mono tracking-tighter rounded bg-red-800 shadow-md text-white py-1 px-2 mr-3">{props.rating}</div> 
            <div className="grid">
                <div className="row-span-2">
                    {[ ...Array(yellowStars)].map((value: undefined, index: number) => (
                        <FontAwesomeIcon className="text-yellow-400" icon={faStar}/>
                    ))}
                    {[ ...Array(halfStars)].map((value: undefined, index: number) => (
                        <FontAwesomeIcon className="text-yellow-400" icon={faStarHalfAlt}/>
                    ))}
                    {[ ...Array(greyStars)].map((value: undefined, index: number) => (
                        <FontAwesomeIcon className="text-gray-400" icon={faStar}/>
                    ))}
                </div>
                <div className="text-gray-500 text-xs">(Based on {props.vibeCount} vibes)</div>
            </div>
        </div>
    </>
}
  
export default observer(RateCard);;