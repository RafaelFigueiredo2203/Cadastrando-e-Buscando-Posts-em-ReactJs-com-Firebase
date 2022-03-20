
import {useState} from 'react';
import './style.css';

import firebase from './firebaseConnection';

function App() {
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [posts, setPosts] = useState([]);

  async function handleAdd(){
    
    await firebase.firestore().collection('posts')
    .add({
      titulo: titulo,
      autor: autor,
    })
    .then(()=>{
      console.log('DADOS CADASTRADO COM SUCESSO!');
      setTitulo('');
      setAutor('');
    })
    .catch((error)=>{
      console.log('GEROU ALGUM ERRO: ' + error);
    })

  }


  async function buscaPost(){
    //  await firebase.firestore().collection('posts')
    //  .doc('123')
    //  .get()
    //  .then((snapshot)=>{

    //   setTitulo(snapshot.data().titulo);
    //   setAutor(snapshot.data().autor);

    //  })
    //  .catch(()=>{
    //    console.log('DEU ALGUM ERRO')
    //  })

    await firebase.firestore().collection('posts')
    .get()
    .then((snapshot)=>{
      let lista = [];

      snapshot.forEach((doc)=>{
        lista.push({
          id: doc.id,
          titulo: doc.data().titulo,
          autor: doc.data().autor
        })
      })

      setPosts(lista);

    })
    .catch(()=>{
      console.log('DEU ALGUM ERRO!');
    })


  }

  return (
    <div>
      <h1>ReactJS + Firebase :)</h1> <br/>

    <div className="container">

    <label>Titulo: </label>
    <textarea type="text" value={titulo} onChange={ (e) => setTitulo(e.target.value)} />

    <label>Autor: </label>
    <input type="text" value={autor} onChange={ (e) => setAutor(e.target.value) }  />

    <button onClick={ handleAdd }>Cadastrar</button>
    <button onClick={ buscaPost }>Buscar Post</button> <br/>

    <ul>
      {posts.map((post)=>{
        return(
          <li key={post.id} >
            <span>Titulo: {post.titulo} </span> <br/>
            <span>Autor: {post.autor} </span> <br/> <br/>
          </li>
        )
      })}
    </ul>

    </div>

    </div>
  );
}

export default App;
