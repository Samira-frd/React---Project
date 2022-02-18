import LeftBoardItems from "./LeftBoardItems";


function LeftBord(props){

    return(
        <div className=" hover:border-l-4 hover:border-orange-500 text-slate-500">            
            
            <div className="  hover:text-orange-400 text-sm ml-7 p-2">
               <i className=" pr-4">{props.image}</i><label>{props.title}</label>
            </div>           
            
        </div>
    )

}


export default LeftBord;