import "./styles.css";

type Props = {
  title: string;
};

export default function BodyTitle({ title }: Props) {
  return <main className="container mt20">{title}</main>;
}
