import "./App.css";
import { nanoid } from "nanoid";
import { FiSearch } from "react-icons/fi";
import debounce from "lodash.debounce";
import Result from "./components/Result";
import { useEffect, useState } from "react";
import { Global, Main } from "./styles/Main.styled";
function App() {
  const [Meaning, setMeaning] = useState(() => {
    return {
      word: "",
      netic: [],
      means: [],
      title: "",
      msg: "",
      audio: "",
    };
  });
  const [word, setWord] = useState("");
  const [count, setCount] = useState(() => 0);

  //fetching data 
  useEffect(() => {
    async function getData() {
      const res = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      const data = await res.json();
      let meanings = data[0]?.meanings;
      // console.log(data[0]);

      setMeaning(() => {
        if (data[0]?.meanings !== undefined) {
          return {
            word: data[0].word,
            netic:
              data[0].phonetic === undefined
                ? data[0].phonetics
                    .map((i) => i.text)
                    .find((x) => x !== undefined && x !== "")
                : data[0].phonetic,
            means: meanings,
            audio: data[0].phonetics.map((i) => i.audio).find((x) => x !== ""),
          };
        } else {
          return {
            title: data.title,
            msg: data.message,
          };
        }
      });
    }
    getData();
  }, [count]);
  console.log(Meaning);

  let res = Meaning?.means?.map((e, i) => (
    <Result key={i} {...e} mean={Meaning} />
  ));
  /*   let d = Meaning.means.map(i => i.definitions)
   d.forEach((child) => child.map(i => console.log(i.definition)))  */

  const handleChange = (e) => {
    const { value } = e.target;
    setWord(value);
  };
  const submit = (e) => {
    e.preventDefault();
    word === "" ? alert("Enter some word") : setCount((p) => p + 1);
  };
  const handleSearch = debounce(handleChange, 150);

  
  function reset(){
    setMeaning(()=> {
      return {
        word: "",
        netic: [],
        means: [],
        title: "",
        msg: "",
        audio: "",
      }
    })
  }
  return (
    <>
      <Main className="App">
        <Global />
        <div>
          <form onSubmit={submit} autoComplete="off">
            <label>
              <h1 onClick={reset} role='button' aria-label="Logo/title">Online Dictionary</h1>
              <div className="searchbar">
                <span id="lang">English</span>
                <input
                  type="search"
                  name=""
                  id="searchBar"
                  onChange={handleSearch}
                  placeholder="search"
                />
                <FiSearch className="searchbtn" size={27} onClick={submit} />
                {/* <button onClick={submit}><FiSearch></FiSearch></button> */}
              </div>
            </label>
          </form>
          {Meaning.means !== undefined ? (
            <div className="ms-2">{res}</div>
          ) : (
            <div>
              <h3>{Meaning.title}</h3>
              <p>
                <em>{Meaning.msg}</em>
              </p>
            </div>
          )}
        </div>
        <em>
          Designed by :
          <a
            href="https://www.instagram.com/daryna_ui_ux/"
            aria-label="Daryna Shylo"
          >
            Daryna Shylo
          </a>
        </em>
      </Main>
      <footer></footer>
    </>
  );
}

export default App;

//console.log(keyword);
/*   data.map(deyta => meaning.push(deyta.meanings))
      meaning[0].map(pos => PartOfSpeech.push(pos.partOfSpeech))
      meaning[0].map(mean => allMeaning.push(mean.definitions))
      console.log() 
      for(let i = 0; i < allMeaning.length ; i++ ){
        allMeaning[i].map(i => define.push(i.definition))
      }

      meaning[0].map(i => define.push(i.definitions) )
      //this will loop the array or an array like [[12323],[134234534],[54345123]]
     define.forEach((child)=>{
        child.forEach((item)=> {
          console.log(item.definition)
          definition.push({def: item.definition})
        })
      }) */
