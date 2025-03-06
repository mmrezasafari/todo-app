import classes from './Button.module.css'

export default function button({ colorType, ...props }) {
  let className = null

  switch (colorType) {
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

