export type LogoProps = {
  name?: string;
  size?: "sm" | "md";
};

export function Logo(props: LogoProps) {
  const { name = "Takopi", size = "md" } = props;
  const iconSize = size === "sm" ? "h-5 w-5" : "h-8 w-8";

  return (
    <div className="flex items-center gap-p1">
      <img src="/images/logo.png" alt="logo image" className={iconSize} />
      <p className="text-black">{name}</p>
    </div>
  );
}
