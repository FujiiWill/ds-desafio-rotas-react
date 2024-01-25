type Props = {
  text: string;
};

export default function ProductItem({ text }: Props) {
  return <div className="product-item">{text}</div>;
}
