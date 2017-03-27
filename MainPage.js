import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  ActivityIndicator,
  Image
} from 'react-native';

import DetailPage from './DetailPage';

const styles = StyleSheet.create({
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center'
  },
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
  },
  flowRight: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  searchInput: {
    height: 36,
    padding: 4,
    marginRight: 5,
    marginTop: 5,
    flex: 4,
    borderWidth: 1,
    borderColor: '#48bbec',
    borderRadius: 8,
    color: '#48bbec'
  },
  button: {
    height: 36,
    flex: 1,
    padding: 4,
    marginRight: 5,
    marginTop: 5,
    flexDirection: 'row',
    backgroundColor: '#48bbec',
    borderColor: '#48bbec',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  image: {
    width: 240,
    height: 160
  }
});

class MainPage extends Component{
  constructor(props){
    super(props);
    this.state = {
      location: '',
      age: ''
    }
  }

  locationChange(e){
    this.setState({
      location: e.nativeEvent.text
    });
  }

  ageChange(e){
    this.setState({
      age: e.nativeEvent.text
    });
  }

  findPressed(){
    var query = 'https://facebook.github.io/react-native/movies.json';
    this.executeQuery(query);
  }

  executeQuery(query){
    fetch(query, {method: 'GET'})
      .then(response => response.json())
      .then(responseData => {
        console.log(responseData.movies);
      this.props.navigator.push({
        title: 'Results',
        component: DetailPage,
        passProps: {list: responseData.movies}
      });
    }).catch(error => {
      console.log(error);
    });
  }

  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.description}>
          Nursery Information!
        </Text>
        <Text style={styles.description}>
          input your location & baby age
        </Text>
        <View style={styles.flowRight}>
          <TextInput
            style={styles.searchInput}
            value={this.state.location}
            onChange={this.locationChange.bind(this)}
            placeholder='your location' />
        </View>
        <View style={styles.flowRight}>
          <TextInput
            style={styles.searchInput}
            value={this.state.age}
            onChange={this.ageChange.bind(this)}
            placeholder='your baby age' />
        </View>
        <View style={styles.flowRight}>
          <TouchableHighlight style={styles.button} underlayColor='#99d9f4' onPress={this.findPressed.bind(this)}>
            <Text style={styles.buttonText}>Go</Text>
          </TouchableHighlight>
        </View>
        <Image source={{uri: 'https://dsh602wr9lxr7.cloudfront.net/suzy.jpg'}} style={styles.image} />
      </View>
    )
  }
}

export default MainPage;