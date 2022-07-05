import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadBugs, getUnresolvedBugs,resolveBugs } from "../store/bugs";

const BugsList = () => {
    const bugs = useSelector(getUnresolvedBugs)
    // const bugs = useSelector(state => state.entities.bugs.list)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadBugs())
    },[])

    const handleResolve = () =>{

    }

    return ( 
        <ul>
           { bugs.map(bug => <li key={bug.id}>{bug.description} <button onClick={() => {dispatch(resolveBugs(bug.id))}}>resolve</button></li>)
            
           } 
        </ul>
     );
}
 
export default BugsList;