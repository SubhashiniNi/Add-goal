type Headertype = {
  source: {
    image: string;
    alt: string;
  };
};
export default function Header({ source }: Headertype) {
  return (
    <header className="header">
      <img src={source.image} alt={source.alt} />
      <h1>Your Course Goal</h1>
    </header>
  );
}
