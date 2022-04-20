
import React from 'react'
import {FlatList, Text} from 'react-native'
import {CATEGORIES} from '../data/dummy-data'
import CategoryGridTile from '../components/CategoryGridTile'

// function renderCategoryItem({item}) {
//     return <CategoryGridTile title={item.title}/>
// }
function renderCategoryItem(itemData) {
    return <CategoryGridTile title={itemData.item.title} color={itemData.item.color}/>
}
function CategoriesScreen(){
    return <FlatList
     data={CATEGORIES}
    keyExtractor={(item)=> item.id}
  //  renderItem={(item)=>renderCategoryItem(item)}
    renderItem={renderCategoryItem}
    numColumns={2}
     />
}

export default CategoriesScreen