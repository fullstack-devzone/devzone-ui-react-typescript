import React, {useState} from "react";
import {InputText} from "primereact/inputtext";
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
        <div className="container col-md-4">
            <div className="card">
                <div className="card-header text-center">
                    <h3>New Link Form</h3>
                </div>
                <div className="card-body">
                    <form onSubmit={e => handleCreateLink(e)} className="row justify-content-center">
                        <div className="form-group col-md-10">
                            <label htmlFor="title">Title</label>
                            <InputText
                                id="title"
                                className="form-control col-md-12"
                                value={newLink.title}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewLink({...newLink, title: e.target.value})}
                            />
                        </div>
                        <div className="form-group col-md-10">
                            <label htmlFor="url">URL</label>
                            <InputText
                                id="url"
                                className="form-control col-md-12"
                                value={newLink.url}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewLink({...newLink, url: e.target.value})}
                            />
                        </div>
                        <div className="form-group col-md-10">
                            <label htmlFor="tags">Tags</label>
                            <InputText
                                id="tags"
                                className="form-control col-md-12"
                                value={tags}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTags(e.target.value)}
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
export default NewLink;
