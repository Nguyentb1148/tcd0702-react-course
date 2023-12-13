import {useReducer} from "react";
import {
    getUser as getGithubUser,
    searchUsers as searchGithubUsers,
} from "../../api/githubApi"
import {GET_USER,SEARCH_USERS}from "../../context/type"
import GithubContext from "../github/githubContext";
import githubReducer from "../github/githubReducer";

const GithubState =(props)=>{
    const initialState = {
        users:[],
        user:{},
    };

    const [state, dispatch]= useReducer(githubReducer, initialState);
    const searchUsers= async (text)=>{
        const response= await searchGithubUsers(text);
        dispatch({type:SEARCH_USERS, payload:response.data.items});
    };
    const getUser= async (login)=>{
        const response= await getGithubUser(login);
        dispatch({type:GET_USER, payload:response.data});
    }

    return (
        <GithubContext.Provider  value={{
            users:state.users,
            user: state.user,
            searchUsers,
            getUser,
        }}>
          {props.children} 
        </GithubContext.Provider>
    )
};

export default GithubState;
