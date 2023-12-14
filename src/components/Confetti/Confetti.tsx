import cssClasses from "$src/components/Confetti/Confetti.module.scss";

export default function Confetti() {
  return (
    <div className={cssClasses.confettiWrapper}>
      {Array.from({ length: 151 }, (_, i) => (
        <div className={{
          [cssClasses.confetti]: true,
          [cssClasses[`confetti_${i}`]]: true
        }}></div>
      ))}
    </div>
  );
}