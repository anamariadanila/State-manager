import { ACTIONS } from "../constants";

class MainStore {
  counterValue = 100;
  subs = [];

  get getCounter() {
    return this.counterValue;
  }

  set updateCounter(value) {
    this.counterValue = value;
  }

  findSub(id) {
    return this.subs.findIndex((el) => el?.id === id);
  }

  isSubscribed(id) {
    const index = this.findSub(id);

    return index === -1 ? false : true;
  }

  subscribe(id, fn) {
    if (this.isSubscribed(id)) {
      console.log("Already subscribed this component!");
    } else {
      this.subs.push({ id: id, callback: fn });
    }
  }

  unsubscribe(id) {
    const index = this.findSub(id);
    if (index > -1) {
      this.subs.splice(index, 1);
    } else {
      console.log(
        "Seems that this component doesn't appear in the subscribers list"
      );
    }
  }

  publish(type, payload) {
    this.actionHandlers(type, payload);

    this.subs.forEach((sub) => sub.callback(this.getCounter));
  }

  increment(value) {
    this.updateCounter = this.getCounter + value;
  }

  decrement(value) {
    this.updateCounter = this.getCounter - value;
  }

  actionHandlers(type, payload) {
    switch (type) {
      case ACTIONS.increment: {
        this.increment(payload);
        break;
      }
      case ACTIONS.decrement: {
        this.decrement(payload);
        break;
      }
      default: {
        console.log("Please enter a valid action type");
        break;
      }
    }
  }
}
export default MainStore;
