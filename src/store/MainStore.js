import { ACTIONS } from "./constants";

class MainStore {
  counterValue = 0;
  subs = [];

  findSub(id) {
    return this.subs.findIndex((el) => el?.id === id);
  }

  subscribe(id, fn) {
    if (this.findSub(id) > -1) {
      console.log("Already subscribed this component!");
    }

    this.subs.push({ id: id, callback: fn });
  }

  unsubscribe(id) {
    const index = this.findSub(id);
    if (index > -1) {
      this.subs.splice(index, 1);
    }
  }

  publish(type, payload) {
    this.actionHandlers(type, payload);

    this.subs.forEach((sub) => sub.callback(this.counterValue));
  }

  actionHandlers(type, payload) {
    console.log(type);
    switch (type) {
      case ACTIONS.increment: {
        this.counterValue += payload;
        break;
      }
      case ACTIONS.decrement: {
        this.counterValue -= payload;
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
