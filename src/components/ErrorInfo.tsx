import classes from "./ErrorInfo.module.css";

const ErrorInfo: React.FC<{ title: string }> = (props) => {
  return (
    <div className={classes.error}>
      <h2>{props.title}</h2>
    </div>
  );
};

export default ErrorInfo;
