import "./App.css";
import { FiSearch } from "react-icons/fi";
import debounce from "lodash.debounce";
import Result from "./components/Result";
import { useEffect, useState, useCallback, useMemo } from "react";
import { Global, Main } from "./styles/Main.styled";
import Homepage from "./components/Homepage";
import useFetch from "./hook/useFetch";
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
  const [isLoading, setIsLoading] = useState(false);
 
  const [data, setData] = useFetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
  );

  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      try {
        const res = await fetch(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        );
        const data = await res.json();
        // let meanings = data[0]?.meanings;
        const meanings = useMemo(() => data?.[0]?.meanings ?? [], [data]);
        // let audioUrl = data[0].phonetics?.[0]?.audio
        setMeaning(() => {
          let M = data[0]?.meanings ?? [];
          if (M !== undefined && M.length > 0) {
            return {
              word: data[0].word,
              netic:
                data[0].phonetic === undefined
                  ? data[0].phonetics
                      .map((i) => i.text)
                      .find((x) => x !== undefined && x !== "")
                  : data[0].phonetic,
              means: meanings,
              audio: data[0].phonetics
                .map((i) => i.audio)
                .find((x) => x !== ""),
              // audio: audioUrl
            };
          } else {
            return {
              title: data.title,
              msg: data.message,
            };
          }
        });
      } catch (err) {
        // console.log(err)
        if (!navigator.onLine) {
          alert(
            "Network Error: Please check your internet connection and try again."
          );
        }
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, [count]);
  // console.log(Meaning);

  /*   
 my own code
let res = Meaning?.means?.map((e, i) => (
    <Result key={i} {...e} mean={Meaning} />
  )); */

  let res = useMemo(
    () =>
      Meaning?.means?.map((e, i) => <Result key={i} {...e} mean={Meaning} />),
    // Below array dependency is necessary for useMemo to work properly,
    // it prevents unncecessary recreation of instances of mapped components
    [Meaning.means]
  );

  /*   let d = Meaning.means.map(i => i.definitions)
   d.forEach((child) => child.map(i => console.log(i.definition)))  */

  // const handleChange = (e) => {
  //   const { value } = e.target;
  //   setWord(value);
  // };
  /*   const submit = (e) => {
    e.preventDefault();
    word === "" ? alert("Please enter some word") : setCount((p) => p + 1);
  }; */

  const submit = useCallback(
    (e) => {
      e.preventDefault();
      word === "" ? alert("Please enter some word") : setCount((p) => p + 1);
    },
    [setCount, word]
  );
  const handleSearch = useCallback(
    debounce((value) => {
      setWord(value);
    }, 150),
    []
  );

  // const handleSearch = debounce(handleChange , 150)

  function reset() {
    setMeaning({
      word: "",
      netic: [],
      means: [],
      title: "",
      msg: "",
      audio: "",
    });
    setWord("");
  }

  // <FetchData w={word} c={count}/>
  return (
    <>
      <Main className="App">
        <Global />
        <div>
          <form onSubmit={submit} autoComplete="off">
            <label>
              <h1 onClick={reset} role="button" aria-label="Logo/title">
                Online Dictionary
              </h1>
              <div className="searchbar">
                <span id="lang">English</span>
                <input
                  type="search"
                  name="word"
                  id="searchBar"
                  onChange={(event) => handleSearch(event.target.value)}
                  // onChange={e => handleSearch(e)}
                  placeholder="search"
                />
                <FiSearch className="searchbtn" size={27} onClick={submit} />
                {/* <button onClick={submit}><FiSearch></FiSearch></button> */}
              </div>
            </label>
          </form>
          {/*   {Meaning.means !== undefined ? (
            <div className="ms-2">{res}</div>
          ) : (
            <div>
              <h2>{Meaning.title}</h2>
              <p>
                <em className="err_msg">{Meaning.msg}</em>
              </p>
            </div>
          )} */}

          {!word && <Homepage />}
          {isLoading ? (
            <div className="loader">
              <span className="loader__element"></span>
              <span className="loader__element"></span>
              <span className="loader__element"></span>
            </div>
          ) : Meaning.means !== undefined && word ? (
            <div className="ms-2">{res}</div>
          ) : (
            <div>
              <h2>{Meaning.title}</h2>
              <p>
                <em className="err_msg">{Meaning.msg}</em>
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
