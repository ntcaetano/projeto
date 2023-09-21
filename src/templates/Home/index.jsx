import "./styles.css";
import React from "react";
import { loadPosts } from "../../utils/load-posts"
import { Posts } from "../../components/Posts";

export class Home extends React.Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 10
  };

  async componentDidMount() {
    await this.loadPosts();
  };

  loadPosts = async () => {
    const { page, postsPerPage } = this.state;

    const postsAndPhotos = await loadPosts();
    this.setState({
      posts: postsAndPhotos.slice(page, postsPerPage),
      allPosts: postsAndPhotos,
    });
  };

  render() {
    const { posts } = this.state;

    return (
      <section className="container">
        <Posts posts={posts}/>
      </section>
    );
  }
}

