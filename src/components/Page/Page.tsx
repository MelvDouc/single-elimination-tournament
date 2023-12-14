import cssClasses from "$src/components/Page/Page.module.scss";

export default function Page({ title, children }: {
  title: string;
  children?: unknown;
}) {
  return (
    <div className={cssClasses.Page}>
      <h2>{title}</h2>
      <article>
        {children}
      </article>
    </div>
  );
}