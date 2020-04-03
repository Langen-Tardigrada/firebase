import React from 'react'
import 'bulma/css/bulma.css'
import firebase from '../firebase/firebase'
import Navbar from './Navbar'
import MessageList from './MessageList'
//import logo from '../logo.svg' image = {logo.svg} can use this

class Login extends React.Component{
    constructor(props){
        super(props)

        this.state = { //เซ็ทสเตทได้ต่อเมื่อ มีการสืบทอดจากคลาสแม่ ทำในฟังก์ชันไม่ได้
            email:'',
            password:'',
            messages: [],
            message:'',
            currentUsers: null,
            image: '',
            comment: '',
        }

        this.logout = this.logout.bind(this)
    }

    componentDidMount(){
        firebase.auth().onAuthStateChanged(user => {
            if(user){
                this.setState({
                    currentUser: user
                })
                firebase.firestore()
                    .collection('users')
                    .doc(user.email)
                    .collection('messages')
                    .onSnapshot(item =>{
                        this.setState({
                            messages: item
                        })
                    })
                firebase.storage()
                    .ref('logo192.png')
                    .getDownloadURL()// can open in web browser
                    .then(respond => this.setState({
                        image: respond
                    }))
            }
        })
    }

    post = e =>{
        firebase.firestore()
        .collection('users')
        .doc(this.state.currentUser.email)
        .collection('messages')
        .add({
            text: this.state.comment,
            timestamp: new Date()
        })
    }

    delete = e =>{
        firebase.firestore()
        .doc(this.state.currentUser.email)
        .collection('messages')
        .doc(e.target.value)
        .delete()
    }
    onChange = e =>{
        const { name, value } = e.target
        this.setState({
            [name]:value
        })
    }

    onSubmit = e=>{
        e.preventDefault()
        const { email, password } = this.state
      //  console.log('hello')
      firebase.auth()
           .signInWithEmailAndPassword(email, password)
           .then(response => {
               this.setState({
                   currentUser: response.user
               })
           })
           .catch(error => {
               this.setState({
                   message: error.message
               })
           })

    }
        
    logout(){
        firebase.auth().signOut().then(response => {
            this.setState({
                currentUser: null
            })
        })

    }

    test = e => {
        console.log(e)
    }
    render(){
        const { message, currentUser} = this.state
        if (currentUser){//
            return(
                <div>
                    <Navbar logout = {this.logout} username="oiooo" testFunction = {this.test} ></Navbar>
                    <MessageList 
                        image='./logo192.png'
                        messages={this.state.messages}
                        onChange={this.onChange}
                        post={this.post}
                        delete={this.delete}/>
                </div>
            )
        }
        return(
            // <div className="App" >
            //     <h3> Test </h3>
            // </div>
            <section className="section container">
                <div className="columns is-centered">
                    <div className="column is-half">
                        <form action="" onSubmit={this.onSubmit}>
                            <div className="field">
                                <label className="label">Email</label>
                                <div className="control">
                                    <input className="input" 
                                    type="email" 
                                    name="email" 
                                    onChange={this.onChange}/>
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">password</label>
                                <div className="control">
                                    <input className="input" 
                                    type="password" 
                                    name="password" 
                                    onChange={this.onChange}/>
                                </div>
                            </div>
                            <div>
                                {message ? <p className="help is-danger">{message}</p> :null}
                            </div>
                            <div className="field is-grouped">
                                
                                <div className="control">
                                    <button className="button is-link" >Login</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        );
    }
}



export default Login