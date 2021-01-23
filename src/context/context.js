import React, {useState, useEffect} from 'react';
import mockUser from './mockData.js/mockUser';
import mockRepos from './mockData.js/mockRepos';
import mockFollowers from './mockData.js/mockFollowers';
import axios from 'axios';

const rootUrl = 'https://api.github.com';

const GithubContext = React.createContext();

const GithubProvider = ({children}) => {

    const [githubUser, setGithubUser] = React.useState(mockUser);
    const [repos, setRepos] = React.useState(mockRepos);
    const [followers, setFollowers] = React.useState(mockFollowers);

    const [requests, setRequests] = React.useState(0);
    const [loading, setLoading] = React.useState(false);

    const [error, setError] = useState({show: false, msg: ""});

    const searchGithubUser = async (user) => {
        //toggleError();
        setLoading(true);
        const response = await axios(`${rootUrl}/users/${user}`)
            .catch(err=>console.log(err));
        //console.log(response);
        if (response){
            setGithubUser(response.data);
            const {login, followers_url} = response.data;

            axios(`${rootUrl}/users/${login}/repos?per_page=100`)
                .then((response)=>{
                    setRepos(response.data)
                });
            axios(`${followers_url}?per_page=100`)
                .then((response)=>{
                    setFollowers(response.data)
                    console.log(response);
                });
        } else {
            //toggleError(true, "user not found");
        }
        checkRequests();
        setLoading(false);
    }

    const checkRequests = () => {
        axios(`${rootUrl}/rate_limit`)
            .then(({data}) => {
                let {rate: {remaining},} = data;
                setRequests(remaining);
                if (remaining === 0) {
                    toggleError(true,"sorry, hourly limit ended");
                }
            }).catch((err => console.log(err)))
    };

    function toggleError({show = false, msg = ''}) {
        setError({show, msg});
    }

    useEffect(checkRequests, []);

    return <GithubContext.Provider
        value={{
            githubUser, repos, followers, requests, error,
            searchGithubUser, loading,
        }}>
        {children}
    </GithubContext.Provider>
}

export {GithubContext, GithubProvider}
