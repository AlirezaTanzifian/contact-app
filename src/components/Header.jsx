import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <h1>Contact App</h1>
      <p>
        Developed with React.js Library by <br />
        <a href="https://alirezatanzifian.github.io/">Alireza Tanzifian</a>
      </p>
    </div>
  );
};

export default Header;
