import classes from './Button.module.css'

export default function button(props) {
  let className = null

  switch (props.colorType) {
    case 'primary': {
      className = `${classes.button} ${classes.primary}`
      break
    }
    case 'danger': {
      className = `${classes.button} ${classes.danger}`
      break
    }
    case 'success': {
      className = `${classes.button} ${classes.success}`
      break
    }
    default: {
      className = `${classes.button}`
    }
  }

  return (
    <button
      {...props}
      className={`${className} ${props.className ? props.className : ''}`}
    >
      {props.children}
    </button>
  )
}

