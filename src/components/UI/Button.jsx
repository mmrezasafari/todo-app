import classes from './Button.module.css'

export default function button(props) {
  return (
    <button {...props} className={`${classes.button} ${props.className ? props.className : ''}`}>{props.children}</button>
  )
}

