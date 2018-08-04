import React, { Component } from "react";
import API from "../../utils/API";
import { Input, FormBtn } from "../../components/Form";
import { List, ListItem, ArticleBtn } from "../../components/List";
import Jumbotron from "../../components/Jumbotron";
import "./Home.css";


class Search extends Component {
    state = {
        articles: [],
        query: "",
        beginDate: "",
        endDate: ""
    };

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = event.target;

        // Updating the input's state
        this.setState({
            [name]: value
        });
    };

    handleSearch = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();
        console.log(true)
        if (this.state.query) {
            API.Search({
                query: this.state.query,
                beginDate: this.state.beginDate,
                endDate: this.state.endDate
            })
                .then(res => this.setState({ articles: res.data }))
                .catch(err => console.log(err));
        }
        this.setState({
            query: "",
            beginDate: "",
            endDate: ""
        });
    };

    saveArticle = event => {
        event.preventDefault();
        console.log("click")
        // API.saveArticle({

        // })
    };
    render() {
        return (
            <div>
                <div className="container text-center">
                    <Jumbotron header="New York Times Article Scrubber">Search for and annotate articles of interest!</Jumbotron>
                    <form>
                        <Input
                            value={this.state.query}
                            onChange={this.handleInputChange}
                            name="query"
                            placeholder="Search String (required)" />
                        <Input
                            value={this.state.beginDate}
                            onChange={this.handleInputChange}
                            name="beginDate"
                            type="date" />
                        <Input
                            value={this.state.endDate}
                            onChange={this.handleInputChange}
                            name="endDate"
                            type="date" />
                        <FormBtn className="text-center" onClick={this.handleSearch}>Search</FormBtn>
                    </form>
                </div>
                <div className="container py-2">
                    <List>
                        <h2 className="text-center results">Results </h2>
                        <div>{this.state.articles.length ? (
                            <div>
                                {this.state.articles.map(article =>
                                    <div className="py-2">
                                        <ListItem
                                            key={article.web_url}
                                            url={article.web_url}
                                            headline={article.headline.main}
                                        />
                                        <ArticleBtn onClick={() => this.saveArticle}>Save</ArticleBtn>
                                    </div>
                                )
                                }
                            </div>
                        ) : (<h5 className="text-center">No Search Match to display</h5>)}
                        </div>
                    </List>
                </div>
            </div>
        )
    }
}

export default Search;