//index.js

const functions = require('firebase-functions');
const app = require('express')();
const auth = require('./util/auth')


const {
    getAllTodos,
    // getOneTodo,
    postOneTodo,
    deleteTodo,
    editTodo
} = require('./APIs/sideprojects')

const {
    loginUser,
	signUpUser,
    uploadProfilePhoto,
    getUserDetail,
    updateUserDetails
} = require('./APIs/users')

app.get('/sideprojects', auth, getAllTodos);
// app.get('/sideproject/:sideprojectId', auth, getOneTodo);
app.post('/sideproject', auth, postOneTodo);
app.delete('/sideproject/:sideprojectId', auth, deleteTodo);
app.put('/sideproject/:sideprojectId', auth, editTodo);

// Users
app.post('/login', loginUser);
app.post('/signup', signUpUser);
//app.post('/user/image', auth, uploadProfilePhoto);
app.get('/user', auth, getUserDetail);
app.post('/user', auth, updateUserDetails);

exports.api = functions.https.onRequest(app);
