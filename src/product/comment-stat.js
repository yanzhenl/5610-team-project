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
        <div className="row border-light border-bottom">
            <div className="col-2">
                <Link to={`/profile/${user._id}`}>
                    <img className="rounded-circle"
                         src={`/images/${user.profilePicture}`} style={{ width: '70px', height: '70px'}} alt=""/>
                </Link></div>
            <div className="col-9 ms-2">
                <div className="mt-2">
                    <span className="fw-bold">{user.firstName}</span>
                    <span className="fw-bold">{user.lastName}</span>
                    <i className="text-primary fa fa-check-circle ms-1"></i>
                    <span className="text-muted ms-2">{user.handle}</span>
                </div>
                <div>{content}</div>
            </div>
        </div>
    )
}

export default CommentStat;