import { defineStore } from "pinia";

interface Message {
  type: string;
  message: any;
}

interface Patient {
  id: number;
  name: string;
  therapist: string;
  type: string;
}

interface ModifiedPatient {
  id: number;
  type: string;
  selectedType: any;
}

interface Review {
  patients: Patient[];
  currentPatient: number;
  transitionName: string;
  selectedType: any;
  modifiedPatients: ModifiedPatient[];
}

interface State {
  maximizeStatus: string;
  connection?: any;
  connectionState: boolean;
  loadingState: boolean;
  currentTab: string;
  message: Message;
  review: Review;
}

export const useIndexStore = defineStore({
  id: "index",
  state: () =>
    ({
      maximizeStatus: "unmaximize",
      connection: null,
      connectionState: false,
      loadingState: false,
      currentTab: "Home",
      message: {
        type: "",
        message: "",
      },
      review: {
        patients: [],
        currentPatient: 0,
        transitionName: "",
        selectedType: {
          "0": undefined,
          "1": undefined,
          "2": undefined,
          "3": undefined,
        },
        modifiedPatients: [],
      },
    } as State),
  getters: {
    patient(): Patient {
      return this.review.patients[this.review.currentPatient];
    },
  },
  actions: {
    startConnection() {
      this.connection = new WebSocket("ws://localhost:6936/ws");

      this.connection.onopen = () => {
        this.connectionState = true;
      };

      this.connection.onclose = () => {
        this.connectionState = false;
        setTimeout(() => {
          this.startConnection();
        }, 1000);
      };

      this.connection.onmessage = (event: { data: string }) => {
        this.message = JSON.parse(event.data);

        console.log(this.message);

        if (
          ["log", "review", "streamNeo"].includes(this.message.type) ||
          (this.message.type === "title" && this.message.message === "start")
        ) {
          this.loadingState = false;
        }
      };
    },
    sendMessage(message: Message) {
      this.connection.send(JSON.stringify(message));
      this.loadingState = true;
    },
    changeTab(payload: string) {
      if (this.loadingState === false) {
        this.currentTab = payload;
      }
    },
    resetReview() {
      this.review = {
        patients: [],
        currentPatient: 0,
        transitionName: "",
        selectedType: {
          "0": undefined,
          "1": undefined,
          "2": undefined,
          "3": undefined,
        },
        modifiedPatients: [],
      };
    },
  },
});
