import React, { Component } from 'react';

class PostSingle extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            data: {}
        }
    }

    componentDidMount() {
        fetch(`https://jsonplaceholder.typicode.com/posts/${this.state.id}?_expand=user&_embed=comments`)
        .then(response => response.json())
        .then(data => {
            this.setState({
                data
            })
        })
    }

    render() {
        const post = this.state.data;

        return (
            <div>
                {post.title && <div>
                <ul className="uk-breadcrumb uk-margin-medium-bottom">
                    <li><a href="/">Item</a></li>
                    <li><a href="/">Item</a></li>
                    <li><span>Active</span></li>
                </ul>
                <h1 className="uk-heading-bullet uk-margin-medium-bottom">
                <span>{post.title}</span>
                <a className="uk-text-small" href="/">{post.user.name}</a>
                </h1>
                <div className="uk-article uk-dropcap uk-margin-large-bottom">
                    {post.body}
                </div>
                <hr/>
                <h3 className="uk-margin-remove-top">Comments:</h3>
                <div className="uk-comments">

                    {post.comments.map(comment => {
                        return (
                            <div key={comment.id}>
                                <article className="uk-comment">
                                    <header className="uk-comment-header uk-grid uk-grid-medium uk-flex-middle">
                                    <div className="uk-width-expand">
                                        <h4 className="uk-comment-title uk-margin-remove"><a className="uk-link-reset" href="/">Author</a></h4>
                                        <ul className="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">
                                        <li><a href={`mailto:${comment.email}`}>{comment.email}</a></li>
                                        </ul>
                                    </div>
                                    </header>
                                    <div className="uk-comment-body">
                                    <p>{comment.body}</p>
                                    </div>
                                </article>
                                <hr/>
                            </div>
                        )
                    })}
                
                </div>
                <hr/>
                <form action="#" className="uk-comment-form uk-margin-medium-top">
                    <fieldset className="uk-fieldset">
                        <legend className="uk-legend">Add Comment</legend>
                        <div className="uk-margin">
                            <textarea className="uk-textarea" rows="5" placeholder="Comment" required></textarea>
                        </div>
                        <div className="uk-margin">
                            <input className="uk-input" type="text" placeholder="Name" required/>
                        </div>
                        <div className="uk-margin">
                            <input className="uk-input" type="email" placeholder="Email" required/>
                        </div>
                        <div className="uk-margin">
                            <button className="uk-button uk-button-primary" type="submit">Post Comment</button>
                        </div>
                    </fieldset>
                </form>
            </div>}
            </div>
        )
    }
}


export default PostSingle;