import {useDispatch, useSelector} from "react-redux";
import React, {useState, useEffect} from "react";
import {findUserByIdThunk, profileThunk} from "../services/users/users-thunks";
import {findUserById} from "../services/users/users-service";
import {createCommentThunk} from "../services/comments/comments-thunk";


const CommentAdd = ({pid}) =>{
    let currentUser = useSelector((state) => state.users);
    currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const dispatch = useDispatch();
    const [ct, setCt] = useState('');
    const addComment = () => {
        const newComment = {
            product_id: pid.id,
            user_id: currentUser._id,
            content: ct
        }
        dispatch(createCommentThunk(newComment));
    }

    return(
        <div className="row">
            {currentUser && (
                <>
                    <div className="col-9">
                    <textarea value={ct} placeholder="Add your comments?"
                              className="form-control border-primary"
                              onChange={(event) => setCt(event.target.value)}>
                    </textarea>
                    </div>
                    <div className="col-2">
                        <button className="btn btn-primary mt-2"
                                onClick={addComment}>Comment
                        </button>
                    </div>
                </>
            )}
        </div>
    )
}

export default CommentAdd;