import React, {useState} from "react";
import {InputText} from "primereact/inputtext";
import PostService from "../../services/PostService";
import {PostModel} from "../../models/PostModels";

const NewPost = () => {
    const postService = new PostService();
    let postModel: PostModel = {description: "", id: 0, tags: [], title: "", url: ""};
    const [newPost, setNewPost] = useState(postModel);
    const [tags, setTags] = useState("");

    const handleCreatePost = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newPost.title.trim() || !newPost.url.trim()) {
            return;
        }
        if ( tags !== "") {
            let postTags = tags.split(",")
            console.log("postTags", postTags)
            newPost.tags = postTags
        }
        postService.createPost(newPost)
            .then((response) => {
                console.log("create post success", response);
                window.location.href = "/";
            })
            .catch(e => {
                console.log("create post error", e);
                alert('Failed to create post, try again')
            });
    };

    return (
        <div className="container col-md-4">
            <div className="card">
                <div className="card-header text-center">
                    <h3>New Post Form</h3>
                </div>
                <div className="card-body">
                    <form onSubmit={e => handleCreatePost(e)} className="row justify-content-center">
                        <div className="form-group col-md-10">
                            <label htmlFor="title">Title</label>
                            <InputText
                                id="title"
                                className="form-control col-md-12"
                                value={newPost.title}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewPost({...newPost, title: e.target.value})}
                            />
                        </div>
                        <div className="form-group col-md-10">
                            <label htmlFor="url">URL</label>
                            <InputText
                                id="url"
                                className="form-control col-md-12"
                                value={newPost.url}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewPost({...newPost, url: e.target.value})}
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
export default NewPost;
