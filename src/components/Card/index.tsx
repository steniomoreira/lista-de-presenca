import './styles.css';

export type CardProps = {
  name: string;
  time: string;
}

export function Card(props: CardProps) {
  return (
    <div className="card">
      <strong>{props.name}</strong>
      <small>
      <svg width="32px" height="32px" viewBox="0 0 32 32" id="i-clock" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
        <circle cx="16" cy="16" r="14" />
        <path d="M16 8 L16 16 20 20" />
      </svg>
            {props.time}
      </small>
    </div>
  )
}