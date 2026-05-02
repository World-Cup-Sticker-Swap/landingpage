type Props = {
  size?: number;
  withText?: boolean;
  className?: string;
};

export function Logo({ size = 36, withText = true, className }: Props) {
  return (
    <span className={`flex items-center gap-2 ${className ?? ""}`}>
      <img
        src="/logo.png"
        alt="Troca Figurinhas"
        width={size}
        height={size}
        className="rounded-xl"
        style={{ width: size, height: size }}
      />
      {withText && (
        <span className="font-display text-[22px] font-extrabold text-ink">
          Troca Figurinhas
        </span>
      )}
    </span>
  );
}
