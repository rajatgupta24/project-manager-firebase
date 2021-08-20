import List from "../projects/List";
import Notification from "./Notification";

function Dashboard() {
    return (
        <>
            <div>
                <div>
                    <div>
                        <List />
                    </div>
                    <div>
                        <Notification />
                    </div>
                </div>    
            </div>            
        </>
    )
}

export default Dashboard
