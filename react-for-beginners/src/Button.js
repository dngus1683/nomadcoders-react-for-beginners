 import styles from "./Button.module.css";  // css를 사용할 때, module로 파일을 만들어 사용한다면, css를 적용하고 싶은 tag에 className을 일일히 알 필요없이 알아서 임의의 이름을 부여해준다.

function Button(props) { // (props) 대신에 ({text, ... , ...})로 사용할 수도 있다. 수업에서는 후자의 방법이 더 대중적이라고 한다. 후자의 경우 사용시에는 역시 props를 빼고 사용하면 된다.
    return (
      <button className={styles.btn} onClick={props.onClick}>{props.text}</button>
    );
  }
  

export default Button;