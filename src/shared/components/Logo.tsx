export type LogoProps = {
  name?: string;
  size?: "sm" | "md";
};

export function Logo(props: LogoProps) {
  const { name = "Takopi", size = "md" } = props;
  const iconSize = size === "sm" ? "h-6 w-6" : "h-8 w-8";

  return (
    <div className="flex items-center gap-p4 cursor-pointer">
      <img src="/images/logo.png" alt="logo image" className={iconSize} />
      <span className="text-black-80 text-b20">{name}</span>
    </div>
  );
}
