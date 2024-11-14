import React from "react";

function TableHeader({ sortOrder, onSortChange }) {
    return (
        <thead>
            <tr>
                <th>User</th>
                <th>Post title</th>
                <th>
                    Comments count
                    <select
                        value={sortOrder}
                        onChange={(e) => onSortChange(e.target.value)}
                        style={{ marginLeft: "8px" }}
                    >
                        <option value="natural">Natural order</option>
                        <option value="ascending">Ascending order</option>
                        <option value="descending">Descending order</option>
                    </select>
                </th>
            </tr>
        </thead>
    );
}

export default TableHeader;