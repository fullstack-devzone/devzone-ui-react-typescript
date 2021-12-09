import React, {useState} from "react";
import LinkService from "../../services/LinkService";
import {LinkModel} from "../../models/LinkModels";

const NewLink = () => {
    const linkService = new LinkService();
    let linkModel: LinkModel = {id: 0, tags: [], title: "", url: ""};
    const [newLink, setNewLink] = useState(linkModel);
    const [tags, setTags] = useState("");

    const handleCreateLink = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newLink.title.trim() || !newLink.url.trim()) {
            return;
        }
        if ( tags !== "") {
            let linkTags = tags.split(",")
            console.log("linkTags", linkTags)
            newLink.tags = linkTags
        }
        linkService.createLink(newLink)
            .then((response) => {
                console.log("create link success", response);
                window.location.href = "/";
            })
            .catch(e => {
                console.log("create link error", e);
                alert('Failed to create link, try again')
            });
    };

    return (
        <div className="container col-md-6">
            <div className="card">
                <div className="card-header text-center">
                    <h3>New Link Form</h3>
                </div>
                <div className="card-body">
                    <form onSubmit={e => handleCreateLink(e)}>
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">Title</label>
                            <input
                                id="title"
                                className="form-control col-md-12"
                                value={newLink.title}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewLink({...newLink, title: e.target.value})}
                            />

                        </div>
                        <div className="mb-3">
                            <label htmlFor="url" className="form-label">URL</label>
                            <input
                                id="url"
                                className="form-control col-md-12"
                                value={newLink.url}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewLink({...newLink, url: e.target.value})}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="tags" className="form-label">Tags</label>
                            <input
                                id="tags"
                                className="form-control col-md-12"
                                value={tags}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTags(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
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
export default NewLink;
