import React from "react";

function TableRow({ row }) {
    return (
        <tr>
            <td>{row.user}</td>
            <td>{row.postTitle}</td>
            <td>{row.commentsCount}</td>
        </tr>
    );
}

export default TableRow;