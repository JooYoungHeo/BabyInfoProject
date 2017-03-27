import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TouchableHighlight,
  ListView,
  Text
} from 'react-native';

const styles = StyleSheet.create({
  textContainer: {
    flex: 1
  },
  rowContainer: {
    flexDirection: 'row',
    padding: 10
  },
  releaseYear: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#48bbec'
  },
  title: {
    fontSize: 20,
    color: '#656565'
  }
});

class DetailPage extends Component{
  constructor(props){
    super(props);
    var dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.title !== r2.title});
    this.state = {
      dataSource: dataSource.cloneWithRows(this.props.list)
    }
  }

  renderRow(rowData, sectionId, rowId){
    return (
      <TouchableHighlight underlayColor='#dddddd'>
        <View>
          <View style={styles.rowContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.releaseYear}>{rowData.releaseYear}</Text>
              <Text style={styles.title} numberOfLines={1}>{rowData.title}</Text>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  }

  render(){
    return (
      <ListView dataSource = {this.state.dataSource} renderRow = {this.renderRow.bind(this)} />
    )
  }
}

export default DetailPage;