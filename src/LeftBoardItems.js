import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { faBullseye } from "@fortawesome/free-solid-svg-icons";
import { faChartBar } from "@fortawesome/free-solid-svg-icons";
import LeftBord from "./LeftBoard";

function LeftBoardItems() {

    const items = 
        [
            {
              id: "item-01",
              title: "Dashboard",
              image: <FontAwesomeIcon icon={faChartBar} />,
            },
        
            {
              id: "item-02",
              title: "Marketplace",
              image: <FontAwesomeIcon icon={faBullseye} />,
              
            },
            {
              id: "item-03",
              title: "Messages",
              image: <FontAwesomeIcon icon={faMessage} />,
            },
          ]
         
   

  return (
    <div className="hover:border-l-2">
      <LeftBord title={items[0].title} image={items[0].image} tab={items[0].title + items[0].image}></LeftBord>
      <LeftBord title={items[1].title} image={items[1].image} tab={items[1].title + items[1].image}></LeftBord>
      <LeftBord title={items[2].title} image={items[2].image} tab={items[2].title + items[2].image}></LeftBord>
    </div>
  );
}

export default LeftBoardItems;
