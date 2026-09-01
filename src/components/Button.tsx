import "../styles/button.css";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
  target?: string;
};

export default function Button({
  children,
  variant = "primary",
  href,
  target,
}: ButtonProps) {
  if (href) {
    return (
      <a
        href={href}
        target={target}
        className={`btn ${variant}`}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={`btn ${variant}`}>
      {children}
    </button>
  );
}