import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpen,
  faHistory,
  faMessage,
  faObjectGroup,
  faSliders,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import {
  faBullseye,
  faFolderTree,
  faChartBar,
} from "@fortawesome/free-solid-svg-icons";
import LeftBord from "./LeftBoard";

function LeftBoardItems() {
  const items = [
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
    {
      id: "item-04",
      title: "My Collection",
      image: <FontAwesomeIcon icon={faFolderTree} />,
    },
    {
      id: "item-05",
      title: "My Wallet",
      image: <FontAwesomeIcon icon={faWallet} />,
    },
    {
      id: "item-06",
      title: "History",
      image: <FontAwesomeIcon icon={faHistory} />,
    },
    {
      id: "item-07",
      title: "Setting",
      image: <FontAwesomeIcon icon={faSliders} />,
    },
    {
      id: "item-08",
      title: "Resources",
      image: <FontAwesomeIcon icon={faBookOpen} />,
    },
    {
      id: "item-09",
      title: "Light Mode",
      image: <FontAwesomeIcon icon={faObjectGroup} />,
    },
  ];

  return (
    <div>
      <div className="mt-14 ml-5">
        <div>
          <h3 className="text-lg font-bold text-slate-600 mb-3">Dashboard</h3>
          <LeftBord
            title={items[0].title}
            image={items[0].image}
            tab={items[0].title + items[0].image}
          ></LeftBord>
        </div>
        <div>
          <LeftBord
            title={items[1].title}
            image={items[1].image}
            tab={items[1].title + items[1].image}
          ></LeftBord>
        </div>
        <div>
          <LeftBord
            title={items[2].title}
            image={items[2].image}
            tab={items[2].title + items[2].image}
          ></LeftBord>
        </div>
      </div>
      <div className="mt-12 ml-5">
        <div>
          <h3 className="text-lg font-bold text-slate-600 mb-3">Profile</h3>
          <LeftBord
            title={items[3].title}
            image={items[3].image}
            tab={items[3].title + items[3].image}
          ></LeftBord>
        </div>
        <div>
          <LeftBord
            title={items[4].title}
            image={items[4].image}
            tab={items[4].title + items[4].image}
          ></LeftBord>
        </div>
        <div>
          <LeftBord
            title={items[5].title}
            image={items[5].image}
            tab={items[5].title + items[5].image}
          ></LeftBord>
        </div>
        <div>
          <LeftBord
            title={items[6].title}
            image={items[6].image}
            tab={items[6].title + items[6].image}
          ></LeftBord>
        </div>
      </div>
      <div className="mt-12 ml-5">
        <div>
          <h3 className="text-lg font-bold text-slate-600 mb-3">Others</h3>
          <LeftBord
            title={items[7].title}
            image={items[7].image}
            tab={items[7].title + items[7].image}
          ></LeftBord>
        </div>
        <div>
          <LeftBord
            title={items[8].title}
            image={items[8].image}
            tab={items[8].title + items[8].image}
          ></LeftBord>
        </div>
        
       
      </div>
    </div>
  );
}

export default LeftBoardItems;
