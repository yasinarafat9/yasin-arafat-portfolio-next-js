import Image from "next/image";

const CardProject = () => {
    return (
        <div className="card-project container2">
            <div className="cardImg-Container">
                <div className="card-img-header text-right"><small >9 Dec 2012</small></div>
                {/* <div className="card-img-footer">Rating</div> */}
                <img className="cardImg" src="https://www.projectmanager.com/wp-content/uploads/2022/03/Dashboard-COST-CAR.jpg" />
            </div>

            <div className="pt-5">
                <h6>Project Name: </h6>
                <small>About This Project</small>
                
            </div>
        </div>

    )
}

export default CardProject;