type Headertype = {
  source: {
    image: string;
    alt: string;
  };
};
export default function Header({ source }: Headertype) {
  return (
    <header>
      <img src={source.image} alt={source.alt} />
    </header>
  );
}
