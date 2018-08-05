import React, { Component } from "react";
import API from "../../utils/API";
import { Input, FormBtn } from "../../components/Form";
import { List, ListItem } from "../../components/List";
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
                .then(res => {
                    let temp = [];
                    temp = res.data.map((article, i) => {
                        return {
                            id: i,
                            headline: article.headline.main,
                            url: article.web_url,
                            snippet: article.snippet
                        }
                    });
                    console.log(temp)
                    this.setState({
                        articles: temp,
                        query: "",
                        beginDate: "",
                        endDate: ""
                    });
                })
                .catch(err => console.log(err));
        }
    };

    saveArticle = id => {
        API.saveArticle(this.state.articles[id])
            .then(res => console.log(res))
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <div className="container text-center">
                    <Jumbotron header="New York Times Article Scrubber">Search for annotate articles of interest</Jumbotron>
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
                        <div className="card">
                            <div className="card-header text-center">
                                Results
                                </div>
                            <div>{this.state.articles.length ? (
                                <div>
                                    {this.state.articles.map((article) =>
                                        <div className=" py-2">
                                            <ListItem
                                                key={article.id}
                                                id={article.id}
                                                url={article.url}
                                                headline={article.headline}
                                                snippet={article.snippet}
                                                saveArticle={this.saveArticle}
                                            >
                                                Save</ListItem>
                                        </div>
                                    )
                                    }
                                </div>
                            ) : (<h5 className="text-center">No Search Match to display</h5>)}
                            </div>
                        </div>
                    </List>
                </div>
            </div>
        )
    }
}
export default Search;