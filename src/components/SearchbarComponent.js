import * as React from 'react';
import { Searchbar } from 'react-native-paper';
import { useDispatch } from 'react-redux'

import { searchTermAction } from '../redux/store'

const SearchbarComponent = ({ handleIconPress }) => {
    const dispatch = useDispatch()
    const [searchQuery, setSearchQuery] = React.useState('')


    const onChangeSearch = (query) => {
        setSearchQuery(query)
        dispatch(searchTermAction(searchQuery))
    }

    return (
        <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
            style={{ borderRadius: 30 }}
            onIconPress={handleIconPress}
            onSubmitEditing={handleIconPress}
        />
    );
};

export default SearchbarComponent;