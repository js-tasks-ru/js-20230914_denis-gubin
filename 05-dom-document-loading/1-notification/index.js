/*
 запуск тестов
 yarn test ./05-dom-document-loading/1-notification/index.spec.js --watch
 */
export default class NotificationMessage {
  static lastNotificationMessage;
  constructor(content, { duration, type } = {}) {
    this.content = content;
    this.duration = duration || 1000;
    this.type = type || 'error';

    this.element = this.createElement(this.createTemplate());
  }

  createTemplate() {
    return (`
      <div class="notification ${this.type}" style="--value:20s">
        <div class="timer"></div>
        <div class="inner-wrapper">
          <div class="notification-header">${this.type}</div>
          <div class="notification-body">
            ${this.content}
          </div>
        </div>
      </div>`);
  }

  createElement(template) {
    const element = document.createElement('div');

    element.innerHTML = template;

    return element.firstElementChild;
  }

  /*
  В один момент времени на странице может быть показано только одно сообщение,
другими словами, если на странице уже присутствовало сообщение - его необходимо скрыть.
   */
  show(container = document.body) {
    if (NotificationMessage.lastNotificationMessage) {
      NotificationMessage.lastNotificationMessage.destroy();
    }

    NotificationMessage.lastNotificationMessage = this;

    container.appendChild(this.element);

    this.timeoutId = setTimeout(() => {
      this.remove();
    }, this.duration);
  }

  remove() {
    this.element.remove();
  }

  destroy() {
    this.remove();

    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }
}
