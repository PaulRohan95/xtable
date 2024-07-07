import React, { useState } from 'react';

const fullTable = 
[
    { date: "2022-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-02", views: 150, article: "Article 2" },
    { date: "2023-09-02", views: 120, article: "Article 3" },
    { date: "2020-09-03", views: 200, article: "Article 4" }
]

function Table() {

    const [tableData, setTableData] = useState(fullTable);

    const sortByDate = () => {
        const sortedDate = [...tableData].sort((a, b) => {
           const dateDiff = new Date(b.date) - new Date(a.date);
        if(dateDiff === 0) {
            return b.views - a.views;
        }
    return dateDiff;
    });
        setTableData(sortedDate);
    };

    const sortByViews = () => {
        const sortedViews = [...tableData].sort((a, b) => {
            const viewDiff = (b.views) - (a.views);
        if (viewDiff === 0) {
            return new Date(b.date) - new Date(a.date);
        }
    return viewDiff;
    });
        setTableData(sortedViews);
    };

  return (
    <div>
        <h1>Date and Views Table</h1>
        <button onClick={sortByDate}>Sort by Date</button>
        <button onClick={sortByViews}>Sort by Views</button>
        <table style={{ display: 'flex', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Views</th>
                    <th>Article</th>
                </tr>
            </thead>
            <tbody>
                {tableData.map((row, index) => (
                    <tr key={index}>
                        <td>{row.date}</td>
                        <td>{row.views}</td>
                        <td>{row.article}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Table;