import React from "react";
import {Tab} from "../../styles/movie-tabs/movie-tabs";
import {TabsWrapper} from "../../styles/movie-tabs/movie-tabs";

const tabsData = [
    {id: 1, title: 'Popularity', value: 'popularity.desc'},
    {id: 2, title: 'Revenue', value: 'release_date.desc'},
    {id: 3, title: 'Vote Average', value: 'vote_average.desc'},
];

const MovieTabs = ({onChangeSortMovies, sort_by}) => {

    const tabs = tabsData.map(({id, title, value}) => {
        const active = sort_by === value;

        return (
            <Tab
                key={id}
                active={active}
                onClick={() => onChangeSortMovies(value)}>
                {title}
            </Tab>
        )
    });

    return (
        <TabsWrapper>
            {tabs}
        </TabsWrapper>
    )
};

export default MovieTabs;