import styles from './styles.module.scss';

interface ProgressBarProps {
  bgColor: string;
  completed: number;
  showLabel?: boolean;
  thin?: boolean;
}

export function ProgressBar({bgColor, completed, showLabel, thin}: ProgressBarProps) {
  return(
    <>
      <div className={`${styles.container} ${thin ? styles.thinContainer : ''}`}>
        <div className={styles.filler} style={{
          width: `${completed}%`,
          backgroundColor: `${bgColor}`
        }}>
          <div className={styles.label}>{showLabel ? `${completed}%` : ''}</div>
        </div>
      </div>
    </>
  );
}