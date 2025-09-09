import Link from "next/link";
import styles from "./Button.module.css";

interface ButtonProps {
  variant: "primary" | "secondary";
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  variant,
  children,
  href,
  onClick,
  type = "button",
}: ButtonProps) {
  // Если есть href - это ссылка
  if (href) {
    return (
      <Link
        href={href}
        className={`${styles.btn} ${styles[`btn--${variant}`]}`}
      >
        {children}
      </Link>
    );
  }

  // Если нет href - это кнопка
  return (
    <button
      className={`${styles.btn} ${styles[`btn--${variant}`]}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
