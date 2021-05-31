import './App.css';
import { Component } from 'react';
import CardList from './components/card-list/card-list-component';
import SearchBox from './components/search-box/searchbox.component';

class App extends Component {
  constructor(){
    super();
    this.state = {
      searchField:"",
      monsters:[]
    }
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => {
      users.map(user=>{
        return user.img = "https://robohash.org/"+user.id+"?set=set2&size=180x180";
      });
      this.setState({monsters:users})
    });
  }

  render(){
    const {monsters, searchField} = this.state;
    let filteredMonsters = monsters.filter(monster=>{
      return monster.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase());
    });
    return (
      <div className="App">
        <h1 className='title'>First React App</h1>
        <SearchBox placeholder = "Search Keywords" handleChange = {evt=>{this.setState({searchField: evt.target.value})}}/>
        <CardList listItems = {filteredMonsters}/>
      </div>
    );
  }
}

export default App;