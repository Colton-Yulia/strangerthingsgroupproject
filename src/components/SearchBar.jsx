import { useState } from "react";

export const SearchBar = ({ allPosts }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const submitHandler = () => {
    try {
      let filteredPosts = allPosts.filter((post) => {
        let postTitle = post.title;
        let searchQuery = searchTerm;
        if (postTitle.toLowerCase() === searchQuery.toLocaleLowerCase());
        {
          let results = "";
          filteredPosts = results;
          return results;
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submitHandler();
        }}
      >
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            console.log(e.target.value);
          }}
        ></input>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};
