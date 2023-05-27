import React, {useState} from "react";
import PostService from "../../services/PostService";
import {PostModel} from "../../models/PostModels";

const NewPost = () => {
    const postService = new PostService();
    let postModel: PostModel = {id: 0, content: "", title: "", url: ""};
    const [newPost, setNewPost] = useState(postModel);

    const handleCreatePost = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newPost.title.trim() || !newPost.url.trim()) {
            return;
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
        <div className="container col-md-6">
            <div className="card">
                <div className="card-header text-center">
                    <h3>New Post Form</h3>
                </div>
                <div className="card-body">
                    <form onSubmit={e => handleCreatePost(e)}>
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">Title</label>
                            <input
                                id="title"
                                className="form-control col-md-12"
                                value={newPost.title}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewPost({...newPost, title: e.target.value})}
                            />

                        </div>
                        <div className="mb-3">
                            <label htmlFor="url" className="form-label">URL</label>
                            <input
                                id="url"
                                className="form-control col-md-12"
                                value={newPost.url}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewPost({...newPost, url: e.target.value})}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="content" className="form-label">Content</label>
                            <textarea
                                id="content"
                                className="form-control col-md-12"
                                value={newPost.content}
                                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setNewPost({...newPost, content: e.target.value})}
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
export default NewPost;
