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
            <div className="col-10">
                <textarea value={ct} placeholder="Add your comments?"
                          className="form-control border-0"
                          onChange={(event) => setCt(event.target.value)}>

                </textarea>
                <div>
                    <button className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
                            onClick={addComment}>
                        Comment
                    </button>
                    <div className="text-primary fs-2">
                        <i className="bi bi-card-image me-3"></i>
                        <i className="bi bi-filetype-gif me-3"></i>
                        <i className="bi bi-bar-chart me-3"></i>
                        <i className="bi bi-emoji-smile me-3"></i>
                        <i className="bi bi-geo-alt"></i>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CommentAdd;