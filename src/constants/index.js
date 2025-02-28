import dayjs from "dayjs";

export const USERS_LIST = [
  {
    id: 1,
    name: "Manisha Gupta",
  },
  {
    id: 2,
    name: "Riya Gairola",
  },
  {
    id: 3,
    name: "Vedansh",
  },
  {
    id: 4,
    name: "Rahul Jain",
  },
  {
    id: 5,
    name: "Sanjoli Verma",
  },
];

const randomUser = () => {
  const randomIndex = Math.floor(Math.random() * USERS_LIST.length);
  return USERS_LIST[randomIndex].id;
}

export const sampleProjects = [
  {
    id: 1,
    title: "Project 1",
    description: "Description 1",
    coverImage: "/homePage.png",
    tasks: [
      {
        id: "blocked",
        title: "Blocked",
        tasks: [
          {
            id: 11,
            title: "Sample Task",
            description: "test description",
            assignedTo: randomUser(),
            dueDate: dayjs("03/25/2025", "MM/DD/YYYY").format("MM/DD/YYYY"),
          },
        ],
      },
      {
        id: "ready",
        title: "Ready",
        tasks: [
          {
            id: 12,
            title: "Sample Task",
            description: "test description",
            assignedTo: 1,
            dueDate: dayjs("03/02/2025", "MM/DD/YYYY").format("MM/DD/YYYY"),
          },
        ],
      },
      {
        id: "inprogress",
        title: "In Progress",
        tasks: [
          {
            id: 13,
            title: "Sample Task",
            description: "test description",
            assignedTo: 1,
            dueDate: dayjs("04/01/2025", "MM/DD/YYYY").format("MM/DD/YYYY"),
          },
        ],
      },
      {
        id: "done",
        title: "Done",
        tasks: [],
      },
    ],
  },
  {
    id: 2,
    title: "Project 2",
    description: "Description 2",
    coverImage: "/career.png",
    tasks: [
      {
        id: "blocked",
        title: "Blocked",
        tasks: [],
      },
      {
        id: "ready",
        title: "Ready",
        tasks: [],
      },
      {
        id: "inprogress",
        title: "In Progress",
        tasks: [],
      },
      {
        id: "done",
        title: "Done",
        tasks: [],
      },
    ],
  },
  {
    id: 3,
    title: "Project 3",
    description: "Description 3",
    coverImage: "/linkedIn.png",
    tasks: [
      {
        id: "blocked",
        title: "Blocked",
        tasks: [],
      },
      {
        id: "ready",
        title: "Ready",
        tasks: [],
      },
      {
        id: "inprogress",
        title: "In Progress",
        tasks: [],
      },
      {
        id: "done",
        title: "Done",
        tasks: [],
      },
    ],
  },
  {
    id: 4,
    title: "Project 4",
    description: "Description 4",
    coverImage: "/blogs.png",
    tasks: [
      {
        id: "blocked",
        title: "Blocked",
        tasks: [],
      },
      {
        id: "ready",
        title: "Ready",
        tasks: [],
      },
      {
        id: "inprogress",
        title: "In Progress",
        tasks: [],
      },
      {
        id: "done",
        title: "Done",
        tasks: [],
      },
    ],
  },
  {
    id: 5,
    title: "Project 5",
    description: "Description 5",
    coverImage: "/vite.svg",
    tasks: [
      {
        id: "blocked",
        title: "Blocked",
        tasks: [],
      },
      {
        id: "ready",
        title: "Ready",
        tasks: [],
      },
      {
        id: "inprogress",
        title: "In Progress",
        tasks: [],
      },
      {
        id: "done",
        title: "Done",
        tasks: [],
      },
    ],
  },
];

export const LOCAL_STORAGE = Object.freeze({
  USER_DATA: "userData",
});

export const ROUTES = Object.freeze({
  ONBOARDING: "/onboarding",
  MAIN: "/",
  PROJECTS: "/projects/:id",
});

export const ITEMS_PER_PAGE = 10;

export const PageHeaders = Object.freeze({
  "/projects": "Projects",
  [ROUTES.MAIN]: "Dashboard",
});

export const DRAGGABLE_ITEM = {
  TASK: "task",
};
export const TASK_STATUS = {
  BLOCKED: "blocked",
  READY: "ready",
  IN_PROGRESS: "inprogress",
  DONE: "done",
};
export const TASK_NAME = {
  [TASK_STATUS.BLOCKED]: "Blocked",
  [TASK_STATUS.READY]: "Ready",
  [TASK_STATUS.IN_PROGRESS]: "In Progress",
  [TASK_STATUS.DONE]: "Done",
};

export const statusOptions = [
    { value: TASK_STATUS.READY, label: "Ready" },
    { value: TASK_STATUS.IN_PROGRESS, label: "In Progress" },
    { value: TASK_STATUS.DONE, label: "Done" },
    { value: TASK_STATUS.BLOCKED, label: "Blocked" },
];
  
export const disabledDate = (current) => {
  return current && current < dayjs().endOf("day");
};