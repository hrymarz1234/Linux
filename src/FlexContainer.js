import React from 'react';

const FlexContainer = ({ element: Element, data }) => {
  return (
    <div style={styles.container}>
      {data.map((item, index) => (
        <div
          key={index}
          style={styles.item}
          onMouseEnter={(e) => (e.currentTarget.style = styles.itemHover)}
          onMouseLeave={(e) => (e.currentTarget.style = styles.item)}
        >
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
    justifyContent: 'center',
    gap: '10px',
    padding: '20px', 
    backgroundColor: '#222831', 
    borderRadius: '12px',
  },
  item: {
    flex: '1 1 calc(33.333% - 10px)', 
    margin: '5px',
    boxSizing: 'border-box',
    padding: '20px', 
    backgroundColor: '#393E46', 
    color: '#EEEEEE', 
    border: '2px solid #00ADB5', 
    borderRadius: '12px', 
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)', 
    transition: 'transform 0.4s ease, box-shadow 0.4s ease',
  },
  itemHover: {
    transform: 'translateY(-8px) scale(1.05)',
    boxShadow: '0 12px 20px rgba(0, 0, 0, 0.3)', 
  },
};

export default FlexContainer;
