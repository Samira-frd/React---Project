

function LeftBord(props){

    return(
        <div className=" text-xl p-5 m-8 text-slate-500">
             
            <h3>{props.title}</h3>
            <div className=" p-3">
               <i>{props.image}</i><label>{props.title}</label>
            </div>
            
            
        </div>
    )

}


export default LeftBord;