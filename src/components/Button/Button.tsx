import cssClasses from "$src/components/Button/Button.module.scss";

export default function Button({ type, red, blue, onclick, children }: {
  type?: "button" | "submit" | "reset";
  red?: boolean;
  blue?: boolean;
  onclick?: (e: Event) => unknown;
  children?: unknown;
}) {
  return (
    <button
      type={type}
      onclick={onclick}
      className={{
        [cssClasses.Button]: true,
        [cssClasses.red]: red === true,
        [cssClasses.blue]: blue === true
      }}
    >{children}</button>
  );
}