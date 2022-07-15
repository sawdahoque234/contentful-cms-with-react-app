import { createClient } from "contentful";
import React, { useEffect, useState } from "react";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const client = createClient({
    space: "wfl3hkkser1k",
    accessToken: "B4qB3MxMz0bDkgtoBU6-pRhPe8D2ff8OVGc34FpGT-w",
  });
  useEffect(() => {
    const getAllEntries = async () => {
      try {
        await client
          .getEntries({
            content_type: "blogsite",
            select: "fields",
          })
          .then((entries) => setBlogs(entries));
      } catch (error) {
        console.log(`Error fetching authors ${error}`);
      }
    };
    getAllEntries();
  }, [client]);

  return (
    <>
    
      <div className="row d-flex justify-content-center">
        {blogs?.items?.map((blog) => (
          <>
            <div className=" col-md-3 mx-2 py-4 shadow-lg border">
              <img
                src={blog.fields.img.fields.file.url}
                className="shadow-lg rounded-3 py-2 img"
                alt="title"
              />
              <h4>{blog.fields.title}</h4>
              <small className="font-weight-bold">
                Published by : {blog.fields.author}.
              </small>
              <p>{blog.fields.des.slice(0, 180)}..</p>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default Blogs;
