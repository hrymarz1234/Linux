import React, { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import TableHeader from "../table/TableHeader";
import TableRow from "../table/TableRow";

function Lab5() {
  const [posts] = useFetch("https://jsonplaceholder.typicode.com/posts");
  const [users] = useFetch("https://jsonplaceholder.typicode.com/users");
  const [comments] = useFetch("https://jsonplaceholder.typicode.com/comments");
  const [tableData, setTableData] = useState([]);
  const [sortOrder, setSortOrder] = useState("natural");

  useEffect(() => {
      const data = posts.map((post) => {
          const user = users.find((u) => u.id === post.userId);
          const postComments = comments.filter((c) => c.postId === post.id);
          return {
              user: user?.name || "Unknown",
              postTitle: post.title,
              commentsCount: postComments.length,
          };
      });
      setTableData(data);
  }, [posts, users, comments]);

  const handleSort = (order) => {
      let sortedData = [...tableData];
      if (order === "ascending") {
          sortedData.sort((a, b) => a.commentsCount - b.commentsCount);
      } else if (order === "descending") {
          sortedData.sort((a, b) => b.commentsCount - a.commentsCount);
      }
      setTableData(sortedData);
      setSortOrder(order);
  };

  return (
      <div>
          <h1>Lab5 - Posts Data</h1>
          <table>
              <thead>
                  <tr>
                      <th>User</th>
                      <th>Post title</th>
                      <th>
                          Comments count
                          <select
                              value={sortOrder}
                              onChange={(e) => handleSort(e.target.value)}
                              style={{ marginLeft: "8px" }}
                          >
                              <option value="natural">Natural order</option>
                              <option value="ascending">Ascending order</option>
                              <option value="descending">Descending order</option>
                          </select>
                      </th>
                  </tr>
              </thead>
              <tbody>
                  {tableData.map((row, index) => (
                      <tr key={index}>
                          <td>{row.user}</td>
                          <td>{row.postTitle}</td>
                          <td>{row.commentsCount}</td>
                      </tr>
                  ))}
              </tbody>
          </table>
      </div>
  );
}

export default Lab5;