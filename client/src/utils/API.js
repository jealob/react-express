import axios from "axios";

export default {
    // Gets all articles
    getArticles: function () {
        return axios.get("/api/articles");
    },
    // Gets all articles
    Search: function (searchQuery) {

        if (!searchQuery.beginDate) {
            searchQuery.beginDate = null;
        }
        if (!searchQuery.endDate) {
            searchQuery.endDate = null;
        }
        return axios.get(`/api/articles/${searchQuery.query}/${searchQuery.beginDate}/${searchQuery.endDate}`);
    },
    // Deletes the book with the given id
    deleteArticle: function (id) {
        return axios.delete("/api/articles/" + id);
    },
    // Saves an article to the database
    saveArticle: function (articleData) {
        console.log(articleData);
        return axios.post("/api/articles", articleData);
    }
};
