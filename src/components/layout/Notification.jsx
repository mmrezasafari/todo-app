import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { notificationAction } from '../../store/notification'
import classes from './Notification.module.css'

export default function Notification({ status, title }) {
  const [isClosing, setIsClosing] = useState(false);
  const dispatch = useDispatch()
  const notification = useSelector((state) => state.notification)

  let className = null

  switch (status) {
    case 'waiting': {
      className = `${classes.notification} ${classes.waiting}`
      break
    }
    case 'success': {
      className = `${classes.notification} ${classes.success}`
      break
    }
    case 'error': {
      className = `${classes.notification} ${classes.error}`
      break
    }
    default: {
      className = `${classes.notification}`
    }
  }

  if (isClosing) {
    className += ` ${classes.closing}`;
  }

  useEffect(() => {
    if (status !== 'waiting') {
      const timer = setTimeout(() => {
        setIsClosing(true);
        setTimeout(() => {
          dispatch(notificationAction.setNotificationData(
            { title: null, status: null, visible: false }
          ));
          setIsClosing(false);
        }, 300);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [dispatch, status]);


  return (
    notification.visible && (
      <section className={className}>{title}</section>
    )
  )
}
