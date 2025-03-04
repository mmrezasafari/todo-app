import classes from './CheckBox.module.css'

export default function CheckBox(props) {
  return (
    <label className={`${classes.checkboxContainer} ${props.className ? props.className : ''}`}>
      <input type="checkbox" {...props} />
      <span className={classes.checkmark}></span>
    </label>
  )
}
