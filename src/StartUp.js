import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWifi } from "@fortawesome/free-solid-svg-icons";
import LeftBord from "./LeftBoard";
import LeftBoardItems from "./LeftBoardItems";


function StartUp(props) {
  return (
    <div>
      <div className="grid grid-rows-2 grid-flow-col gap-4 rounded-md h-screen m-10">
        <div className="row-span-6 col-span-1 bg-slate-50 rounded-lg Left Pannel ">
          <div className="text-left grid  pt-8 pl-10 text-3xl ">
            <i className=" text-4xl  text-zinc-700">
              <FontAwesomeIcon icon={faWifi}/><label className="text-3xl font-bold not-italic" htmlfor="">SFRD.</label>
            </i>
            <h1 className="text-zinc-400  hover:text-blue-500 text-2xl">
              SFRD Market Place
            </h1>
          </div>
          <LeftBoardItems><h3>Dashboard</h3></LeftBoardItems>          
        </div>
        <div className="row-span-6 col-span-4 bg-gray-200 rounded-lg Right Pannel"></div>
      </div>
    </div>
  );
}

export default StartUp;
