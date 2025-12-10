import React from "react";
import AuthorlistCat from "../common/author/AuthorlistCat";
import { Authorlist } from "../../utils/Authorlist";

const Authors = () => {
  return (
    <div className="relative mb-20 px-4 md:px-8 lg:px-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-2">Most Popular Authors</h2>
        <p className="text-gray-600">Check out our popular authors</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 justify-items-center  ">
        {Authorlist.map((author, i) => (
          <div
            key={i}
            className="flex justify-center px-2 w-full max-w-[180px] md:max-w-[150px] lg:max-w-[200px]"
          >
            <AuthorlistCat author={author} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Authors;
