import { AsyncStorage } from 'react-native';
import { Notifications, Permissions } from 'expo';

const NOTIFICATION_FLASHCARD_KEY = 'mobileFlashCards:notifications';

export function clearLocalNotification() {
  return AsyncStorage.removeItem(NOTIFICATION_FLASHCARD_KEY).then(Notifications.cancelAllScheduledNotificationsAsync);
}

function createNotification() {
  return {
    title: 'Flashcard Study KIT!',
    body: 'Remember you need to study!',
    ios: {
      sound: true,
    },
  };
}
// Codo has been taken from Udacity course since it is a very concise method implementation.
export function setLocalNotification(chosenTime) {
  console.log(chosenTime)
  AsyncStorage.getItem(NOTIFICATION_FLASHCARD_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS).then(({ status }) => {
          if (status === 'granted') {
            Notifications.cancelAllScheduledNotificationsAsync().then((data) => {
              Notifications.scheduleLocalNotificationAsync(createNotification(), {
                time: chosenTime,
                repeat: 'day',
              });

              AsyncStorage.setItem(NOTIFICATION_FLASHCARD_KEY, JSON.stringify(true));
            })


          }
        });
      }
    });
}
