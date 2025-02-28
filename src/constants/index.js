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
    id: 5,
    title: "Career @ Trackier",
    description:
      "Join the Trackier team and be part of a dynamic work environment that fosters innovation, creativity, and growth.",
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
        tasks: [
          {
            id: 53,
            title: "Hire Vedansh",
            description:
              "Vedansh is a good candidate, I think we should hire him, what do you think?",
            assignedTo: 2,
            dueDate: dayjs("08/01/2025", "MM/DD/YYYY").format("MM/DD/YYYY"),
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
    id: 1,
    title: "Trackier Performance Platform",
    description:
      "Trackier is a cutting-edge performance marketing platform that provides real-time affiliate tracking, campaign optimization, and detailed analytics to boost ROI.",
    coverImage: "/homePage.png",
    tasks: [
      {
        id: "blocked",
        title: "Blocked",
        tasks: [
          {
            id: 11,
            title: "Resolve Conversion Tracking Issue",
            description:
              "Investigate discrepancies in conversion data from affiliate networks and implement fixes.",
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
            title: "Finalize Affiliate Integration",
            description:
              "Complete integration with key affiliate networks and ensure seamless data flow.",
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
            title: "Develop Real-Time Analytics Module",
            description:
              "Implement a module to provide real-time insights for active campaigns.",
            assignedTo: 1,
            dueDate: dayjs("04/01/2025", "MM/DD/YYYY").format("MM/DD/YYYY"),
          },
        ],
      },
      {
        id: "done",
        title: "Done",
        tasks: [
          {
            id: 14,
            title: "Launch Campaign Tracking Dashboard",
            description:
              "Deploy the initial version of the dashboard to monitor campaign performance.",
            assignedTo: randomUser(),
            dueDate: dayjs("02/15/2025", "MM/DD/YYYY").format("MM/DD/YYYY"),
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Trackier Affiliate Dashboard Revamp",
    description:
      "Redesign the affiliate dashboard to enhance usability, performance metrics, and real‑time insights for partners.",
    coverImage: "/dashboard.png",
    tasks: [
      {
        id: "blocked",
        title: "Blocked",
        tasks: [
          {
            id: 21,
            title: "Investigate Slow Load Times",
            description:
              "Analyze and fix performance issues causing delays in loading key dashboard components.",
            assignedTo: randomUser(),
            dueDate: dayjs("04/10/2025", "MM/DD/YYYY").format("MM/DD/YYYY"),
          },
        ],
      },
      {
        id: "ready",
        title: "Ready",
        tasks: [
          {
            id: 22,
            title: "Design New UI Mockups",
            description:
              "Finalize modern UI mockups that align with the revamped dashboard vision.",
            assignedTo: 2,
            dueDate: dayjs("04/15/2025", "MM/DD/YYYY").format("MM/DD/YYYY"),
          },
        ],
      },
      {
        id: "inprogress",
        title: "In Progress",
        tasks: [
          {
            id: 23,
            title: "Develop Real-Time Widgets",
            description:
              "Implement dynamic widgets for displaying live campaign performance metrics.",
            assignedTo: 3,
            dueDate: dayjs("04/20/2025", "MM/DD/YYYY").format("MM/DD/YYYY"),
          },
        ],
      },
      {
        id: "done",
        title: "Done",
        tasks: [
          {
            id: 24,
            title: "Beta Test New Dashboard",
            description:
              "Conduct beta testing with a select group of affiliates and collect feedback.",
            assignedTo: randomUser(),
            dueDate: dayjs("04/05/2025", "MM/DD/YYYY").format("MM/DD/YYYY"),
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Trackier Mobile App Integration",
    description:
      "Integrate mobile functionalities to enable affiliates and advertisers to manage campaigns on the go with a seamless mobile experience.",
    coverImage: "/mobile-integration.png",
    tasks: [
      {
        id: "blocked",
        title: "Blocked",
        tasks: [
          {
            id: 31,
            title: "Resolve Mobile API Errors",
            description:
              "Debug and resolve API issues that are causing intermittent app crashes on mobile devices.",
            assignedTo: randomUser(),
            dueDate: dayjs("05/05/2025", "MM/DD/YYYY").format("MM/DD/YYYY"),
          },
        ],
      },
      {
        id: "ready",
        title: "Ready",
        tasks: [
          {
            id: 32,
            title: "Finalize Mobile UI Components",
            description:
              "Ensure mobile UI components align with the web design and offer an intuitive user experience.",
            assignedTo: 1,
            dueDate: dayjs("05/10/2025", "MM/DD/YYYY").format("MM/DD/YYYY"),
          },
        ],
      },
      {
        id: "inprogress",
        title: "In Progress",
        tasks: [
          {
            id: 33,
            title: "Implement Push Notifications",
            description:
              "Develop and test real‑time push notifications to keep users updated on campaign performance.",
            assignedTo: 2,
            dueDate: dayjs("05/15/2025", "MM/DD/YYYY").format("MM/DD/YYYY"),
          },
        ],
      },
      {
        id: "done",
        title: "Done",
        tasks: [
          {
            id: 34,
            title: "Complete App Store Submission",
            description:
              "Finalize mobile app assets and complete the submission process to both the App Store and Google Play.",
            assignedTo: randomUser(),
            dueDate: dayjs("05/01/2025", "MM/DD/YYYY").format("MM/DD/YYYY"),
          },
        ],
      },
    ],
  },

  {
    id: 4,
    title: "Trackier LinkedIn Integration",
    description:
      "Integrate LinkedIn functionalities to enable advertisers to create, manage, and optimize campaigns directly from the Trackier platform.",
    coverImage: "/linkedIn.png",
    tasks: [
      {
        id: "blocked",
        title: "Blocked",
        tasks: [
          {
            id: 41,
            title: "Resolve LinkedIn API Errors",
            description:
              "Debug and resolve API issues that are causing intermittent errors in campaign creation and tracking.",
            assignedTo: randomUser(),
            dueDate: dayjs("06/15/2025", "MM/DD/YYYY").format("MM/DD/YYYY"),
          },
        ],
      },
      {
        id: "ready",
        title: "Ready",
        tasks: [
          {
            id: 42,
            title: "Finalize LinkedIn Campaign Manager",
            description:
              "Develop a user-friendly interface to create and manage LinkedIn campaigns within the Trackier platform.",
            assignedTo: 1,
            dueDate: dayjs("06/20/2025", "MM/DD/YYYY").format("MM/DD/YYYY"),
          },
        ],
      },
      {
        id: "inprogress",
        title: "In Progress",
        tasks: [
          {
            id: 43,
            title: "Implement LinkedIn Analytics",
            description:
              "Integrate LinkedIn analytics to provide real-time insights on campaign performance and audience engagement.",
            assignedTo: 2,
            dueDate: dayjs("06/25/2025", "MM/DD/YYYY").format("MM/DD/YYYY"),
          },
        ],
      },
      {
        id: "done",
        title: "Done",
        tasks: [
          {
            id: 44,
            title: "Launch LinkedIn Integration",
            description:
              "Deploy the LinkedIn integration feature to all users and provide training resources.",
            assignedTo: randomUser(),
            dueDate: dayjs("06/10/2025", "MM/DD/YYYY").format("MM/DD/YYYY"),
          },
        ],
      },
    ],
  },
  {
    id: 6,
    title: "Interactive Blogs",
    description:
      "Create a platform for users to share their thoughts, experiences, and insights on performance marketing and affiliate industry trends.",
    coverImage: "/blogs.png",
    tasks: [
      {
        id: "blocked",
        title: "Blocked",
        tasks: [
          {
            id: 61,
            title: "Resolve Blog Post Formatting Issues",
            description:
              "Investigate and fix formatting issues that are affecting the readability of blog posts.",
            assignedTo: randomUser(),
            dueDate: dayjs("08/15/2025", "MM/DD/YYYY").format("MM/DD/YYYY"),
          }
        ],
      },
      {
        id: "ready",
        title: "Ready",
        tasks: [
          {
            id: 62,
            title: "Finalize Blog Post Categories",
            description:
              "Create a comprehensive list of categories to organize blog posts effectively.",
            assignedTo: 1,
            dueDate: dayjs("08/20/2025", "MM/DD/YYYY").format("MM/DD/YYYY"),
          },
        ],
      },
      {
        id: "inprogress",
        title: "In Progress",
        tasks: [
          {
            id: 63,
            title: "Develop Comment Moderation System",
            description:
              "Implement a system to moderate and manage user comments on blog posts.",
            assignedTo: 2,
            dueDate: dayjs("08/25/2025", "MM/DD/YYYY").format("MM/DD/YYYY"),
          },
        ],
      },
      {
        id: "done",
        title: "Done",
        tasks: [
          {
            id: 64,
            title: "Launch Blogging Platform",
            description:
              "Deploy the interactive blogging platform and invite users to share their insights.",
            assignedTo: randomUser(),
            dueDate: dayjs("08/10/2025", "MM/DD/YYYY").format("MM/DD/YYYY"),
          }
        ],
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

export const ITEMS_PER_PAGE = 8;

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