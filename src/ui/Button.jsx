import { Link } from "react-router-dom";

const base =
  "inline-block rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-500 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 px-4 text-sm ";

function Button({ children, to = null, type, onClick }) {
  const styles = {
    primary: base + "py-3 md:px-6 md:py-3",
    small: base + "py-1 md:px-3 text-xs",
    round: base + "py-1 md:px-3.5 md:py-2 px-2.5",
    secondary:
      "text-sm inline-block rounded-full border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-500 transition-colors duration-500 hover:bg-stone-300 focus:bg-stone-300 hover:text-stone-800 focus:outline-none focus:ring focus:ring-stone-200 focus:text-stone-800 focus:ring-offset-2 px-4 py-2.5 md:px-6 md:py-3.5",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  if (onClick)
    return (
      <button onClick={onClick} className={styles[type]}>
        {children}
      </button>
    );
  return <button className={styles[type]}>{children}</button>;
}

export default Button;
