"use client";
export default function Item({ name, quantity, category }) {
  return (
    <li style={styles.container}>
      <div style={styles.textGroup}>
        <div style={styles.name}>{name}</div>
        <div style={styles.details}>
          <span>Buy {quantity} in <span style={styles.category}>{category}</span></span>
        </div>
      </div>
    </li>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem',
    margin: '0.5rem 0',
    backgroundColor: 'rgba(255, 215, 0, 0.1)',
    borderRadius: '8px',
    border: '1px solid #FFD700',
  },
  textGroup: {
    flex: 1,
    marginRight: '1rem',
  },
  name: {
    fontSize: '1.2rem',
    marginBottom: '0.3rem',
    color: '#FFD700',
  },
  details: {
    display: 'flex',
    gap: '1rem',
    color: '#FFD700',
    opacity: 0.8,
  },
  category: {
    textTransform: 'capitalize',
    color: '#00f7ff'
  }
};