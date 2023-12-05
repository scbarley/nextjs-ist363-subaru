import styles from './grid.module.scss';

const Grid = ({ children }) => {
    return <ul class={styles.grid}>
        {children}
    </ul>
};
export default Grid;