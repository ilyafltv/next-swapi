import styles from "./Button.module.css";

// Кнопка
export default function Button({
  variant,
  children,
}: Readonly<{ variant: "primary" | "secondary"; children: React.ReactNode }>) {
  return (
    <button
      className={`${styles.btn} ${styles[`btn--${variant}`]}`}
      type="button"
    >
      {children}
    </button>
  );
}
