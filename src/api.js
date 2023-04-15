export const fetchData = async (word) => {
    try {
      const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      const data = await res.json();
      return data;
    } catch (err) {
      console.log(err);
      throw new Error("Unable to fetch data");
    }
  };
  