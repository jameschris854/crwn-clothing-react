import './App.css';
import {Switch,Route} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component'
import HomePage from './pages/homepage/homepage.component'
import Header from './components/header/header.component'
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import { auth,createUserProfileDocument } from './firebase/firebase.utils'
import React from 'react';
class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser:null
    }

  }
  unSubscribeFromAuth = null
  componentDidMount(){
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      //check if user is signed in
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser:{
              id:snapshot.id,
              ...snapshot.data()
            }
          },() =>  console.log(this.state))
        }); 
      }
      this.setState({
        currentUser:userAuth
      })
    })
  }
  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }
  render(){
  return (
      <div>
        <Header currentUser={this.state.currentUser} />
    <Switch>
    <Route exact  path='/' component={HomePage} />
    <Route path='/shop' component={ShopPage} />
    <Route path='/signin' component={SignInAndSignUp} />
</Switch>
</div>
  );
  }
}

export default App;
