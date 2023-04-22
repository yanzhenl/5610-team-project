import {useDispatch, useSelector} from "react-redux";
import React, {useState, useEffect} from "react";
import {findUserByIdThunk, profileThunk} from "../services/users/users-thunks";
import {Link} from "react-router-dom";
import {findUserById} from "../services/users/users-service";


const CommentStat = ({comment}) =>{
    const userId = comment.user_id;
    const dispatch = useDispatch();
    const [content, setContent] = useState(comment.content);
    const [user, setUser] = useState([]);
    //console.log(comment.user_id);
    //const user = dispatch(findUserByIdThunk(comment.user_id))
    const fetchUser = async () => {
            const one = await findUserById(userId);
            setUser(one);
    };
    useEffect(() => {
        fetchUser();
    }, [userId]);

    return(
        <div className="row border-light">
            <div className="col-2">
                <Link to={`/profile/${user._id}`}>
                <img className="rounded-circle"
                    src={`/images/${user.profilePicture}`} style={{ width: '70px', height: '70px'}} alt=""/>
                </Link></div>
            <div className="col-9">
                <div>{user.firstName}</div>
                <div>{content}</div>
            </div>
        </div>
    )
}

export default CommentStat;