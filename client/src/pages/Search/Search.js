import React from "react";
import { Input, FormBtn } from "../../components/Form";
import Jumbotron from "../../components/Jumbotron";


const Search = () => {
    return (
        <div className="container text-center">
            <Jumbotron>Search for and annotate articles of interest!</Jumbotron>
            <Input />
            <Input />
            <Input />
            <FormBtn className="text-center">Search</FormBtn>
        </div>
    )
}

export default Search;