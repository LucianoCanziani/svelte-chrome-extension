// background.js

// Handle the creation of notifications.
function createNotification() {
  const notificationOptions = {
    type: 'basic',
    title: 'Notification Title',
    message: 'Notification Message',
    iconUrl: 'favicon.png',
  };
  chrome.notifications.create('notificationId', notificationOptions);
}

// Add an event listener to respond to a message from the popup script.
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'showNotification') {
    createNotification();
  }
});
