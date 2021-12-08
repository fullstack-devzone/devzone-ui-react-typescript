import React, {useEffect, useState} from "react";
import { useHistory } from "react-router-dom";
import {InputText} from "primereact/inputtext";
import AuthService from "../../services/AuthService";
import UserService, {UpdateUserModel} from "../../services/UserService";

const UserProfile = () => {
    const authService = new AuthService();
    const userService = new UserService();
    const history = useHistory();

    const [id, setId] = useState(-1);
    const [name, setName] = useState("");
    const [bio, setBio] = useState("");
    const [loc, setLoc] = useState("");
    const [githubUsername, setGithubUsername] = useState("");
    const [twitterUsername, setTwitterUsername] = useState("");

    const getCurrentUserProfile = () => {
        console.log("authService.getCurrentUser():", authService.getCurrentUser())
        let userId = authService.getCurrentUser().user.id;
        userService.getUserProfile(userId).then(response => {
            const userProfile = response.data;
            console.log("userProfile:", userProfile)
            setId(userProfile.id)
            setName(userProfile.name)
            setBio(userProfile.bio || "")
            setLoc(userProfile.location || "")
            setGithubUsername(userProfile.githubUsername || "")
            setTwitterUsername(userProfile.twitterUsername || "")
        });
    }

    useEffect(()=> {
        getCurrentUserProfile();
    }, []);

    const handleProfileUpdate = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name.trim()) {
            return;
        }
        const userProfile : UpdateUserModel = {
            id: id,
            name: name,
            bio: bio,
            location: loc,
            githubUsername: githubUsername,
            twitterUsername: twitterUsername
        }
        userService.updateUserProfile(userProfile)
            .then((response) => {
                console.log("update UserProfile success", response);
                alert('Updated UserProfile successfully')
            })
            .catch(e => {
                console.log("updateUserProfile error", e);
                alert('Failed to update UserProfile, try again')
            });
    };

    return (
        <div className="container col-md-4">
            <div className="card">
                <div className="card-header text-center">
                    <h3>My Profile</h3>
                </div>
                <div className="card-body">
                    <form onSubmit={e => handleProfileUpdate(e)} className="row justify-content-center">
                        <div className="form-group col-md-10">
                            <label htmlFor="name">Name</label>
                            <InputText
                                id="name"
                                className="form-control col-md-12"
                                value={name}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                            />
                        </div>
                        <div className="form-group col-md-10">
                            <label htmlFor="email">Bio</label>
                            <InputText
                                id="bio"
                                className="form-control col-md-12"
                                value={bio}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBio(e.target.value)}
                            />
                        </div>
                        <div className="form-group col-md-10">
                            <label htmlFor="password">Location</label>
                            <InputText
                                id="loc"
                                className="form-control col-md-12"
                                value={loc}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLoc(e.target.value)}
                            />
                        </div>
                        <div className="form-group col-md-10">
                            <label htmlFor="password">GitHub UserName</label>
                            <InputText
                                id="ghUsername"
                                className="form-control col-md-12"
                                value={githubUsername}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setGithubUsername(e.target.value)}
                            />
                        </div>
                        <div className="form-group col-md-10">
                            <label htmlFor="password">Twitter UserName</label>
                            <InputText
                                id="twUsername"
                                className="form-control col-md-12"
                                value={twitterUsername}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTwitterUsername(e.target.value)}
                            />
                        </div>
                        <div className="form-group col-md-10">
                            <button type="submit" className="btn btn-primary">
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
