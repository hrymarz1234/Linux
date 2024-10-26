import React from 'react';

const FlexContainer = ({ element: Element, data }) => {
  return (
    <div style={styles.container}>
      {data.map((item, index) => (
        <div key={index} style={styles.item}>
          <Element {...item} />
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  item: {
    flex: '1 1 calc(33.333% - 10px)', // Ustala 3 kolumny w rzędzie
    margin: '5px',
    boxSizing: 'border-box',
  },
};

export default FlexContainer;
