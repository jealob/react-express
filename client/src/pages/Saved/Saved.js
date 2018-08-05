import React, { Component } from "react";
import API from "../../utils/API";
import { List, SavedItem } from "../../components/List";
import Jumbotron from "../../components/Jumbotron";
import DeleteBtn from "../../components/DeleteBtn";

class Saved extends Component {
    state = {
        savedArticles: [],
    };

    componentDidMount() {
        this.loadArticles();
    };

    loadArticles = () => {
        API.getArticles()
            .then(res =>
                this.setState({ savedArticles: res.data })
            )
            .catch(err => console.log(err));
    };

    handleDeleteArticle = id => {
        console.log("id: ", id)
        API.deleteArticle(id)
            .then(res => this.loadArticles())
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <div className="container text-center ">
                    <Jumbotron header="New York Times Article Scrubber">View or Delete Articles</Jumbotron>
                </div>
                <div className="container py-4" >
                    <List>
                        <div className="card">
                            <div className="card-header text-center">
                                Saved
                                </div>
                            <div className="my-2">{this.state.savedArticles.length ? (
                                <div>
                                    {this.state.savedArticles.map((article) =>
                                        <div className=" py-2">
                                            <SavedItem
                                                key={article._id}
                                                url={article.url}
                                                headline={article.headline}
                                                snippet={article.snippet}
                                                date={article.date}
                                                type="btn btn-danger mx-2">
                                                <DeleteBtn onClick={() => this.handleDeleteArticle(article._id)}/>
                                            </SavedItem>
                                        </div>
                                )
                                }
                                </div>
                            ) : (<h5 className="text-center">No Saved Article to display</h5>)}
                            </div>
                        </div>
                    </List>
                </div>
            </div>
        )
    }
}

export default Saved;