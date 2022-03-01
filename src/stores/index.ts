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

interface Test {
  id: number;
  name: string;
  therapist: string;
  date: string;
  totallyAgreeTotal: number;
  agreeTotal: number;
  noOpinionTotal: number;
  disAgreeTotal: number;
  totallyDisAgreeTotal: number;
  validate: boolean;
  answers: [];
}

interface StreamNeo {
  tests: Test[];
  currentIndex: number;
  lastIndex: number;
}

interface State {
  maximizeStatus: string;
  connection?: any;
  connectionState: boolean;
  loadingState: boolean;
  currentTab: string;
  message: Message;
  review: Review;
  streamNeo: StreamNeo;
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
      streamNeo: {
        tests: [],
        currentIndex: 0,
        lastIndex: 0,
      },
    } as State),
  getters: {
    patient(): Patient {
      return this.review.patients[this.review.currentPatient];
    },
    currentTest(): Test {
      return this.streamNeo.tests[this.streamNeo.currentIndex];
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
