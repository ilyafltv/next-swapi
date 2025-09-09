import styles from "./Loading.module.css";

interface LoadingProps {
  size?: "small" | "medium" | "large";
  text?: string;
}

export default function Loading({ size = "medium", text }: LoadingProps) {
  return (
    <div className={styles.loading} data-size={size}>
      <div className={styles.spinner}></div>
      {text && <p className={styles.text}>{text}</p>}
    </div>
  );
}
