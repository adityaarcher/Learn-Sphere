export const CATEGORIES = ['Web Development', 'Programming', 'Data Science', 'Design']

export const LEVELS = ['Beginner', 'Intermediate']

export const COURSES = [
  {
    id: 'html-css-foundations',
    title: 'HTML & CSS Foundations',
    category: 'Web Development',
    level: 'Beginner',
    duration: '3 hours',
    instructor: 'Ananya Rao',
    rating: 4.8,
    students: 12400,
    icon: '🎨',
    colors: ['#6366f1', '#22d3ee'],
    summary: 'Build and style real web pages from a blank file.',
    description:
      'Learn how browsers turn markup into pages, write clean semantic HTML, and style layouts with modern CSS.',
    outcomes: [
      'Structure pages with semantic HTML',
      'Style text, colors and spacing with CSS',
      'Build responsive layouts with Flexbox',
      'Understand how the web works'
    ],
    lessons: [
      {
        id: 'how-the-web-works',
        title: 'How the Web Works',
        duration: '8 min',
        content: [
          {
            type: 'p',
            text: 'When you type an address into a browser, it asks a server for a file. The server replies with HTML, and the browser reads that HTML from top to bottom to draw the page.'
          },
          {
            type: 'p',
            text: 'Most pages also load CSS for the look and JavaScript for the behavior. Think of HTML as the skeleton, CSS as the clothing and JavaScript as the muscles.'
          },
          {
            type: 'tip',
            text: 'Open any website, right click and choose Inspect to see the HTML and CSS behind it.'
          }
        ]
      },
      {
        id: 'semantic-html',
        title: 'Writing Semantic HTML',
        duration: '12 min',
        content: [
          {
            type: 'p',
            text: 'Semantic tags describe what content means, not just how it looks. Screen readers and search engines depend on them.'
          },
          {
            type: 'code',
            text: '<header>\n  <h1>My Blog</h1>\n  <nav>\n    <a href="/">Home</a>\n    <a href="/about">About</a>\n  </nav>\n</header>\n<main>\n  <article>\n    <h2>First post</h2>\n    <p>Hello world!</p>\n  </article>\n</main>\n<footer>Made with care</footer>'
          },
          {
            type: 'p',
            text: 'Use one h1 per page, keep headings in order, and prefer button for actions and a for links.'
          }
        ]
      },
      {
        id: 'flexbox-layout',
        title: 'Styling with Flexbox',
        duration: '15 min',
        content: [
          {
            type: 'p',
            text: 'Flexbox arranges items in a row or a column and makes spacing and alignment simple. Turn it on with display: flex on the parent.'
          },
          {
            type: 'code',
            text: '.cards {\n  display: flex;\n  gap: 16px;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.card {\n  flex: 1 1 240px;\n  padding: 20px;\n  border-radius: 12px;\n}'
          },
          {
            type: 'tip',
            text: 'flex-wrap lets cards drop onto a new line on small screens, which gives you responsive layouts almost for free.'
          }
        ]
      }
    ]
  },
  {
    id: 'javascript-essentials',
    title: 'JavaScript Essentials',
    category: 'Web Development',
    level: 'Beginner',
    duration: '4 hours',
    instructor: 'Rohan Mehta',
    rating: 4.7,
    students: 18900,
    icon: '⚡',
    colors: ['#f59e0b', '#ef4444'],
    summary: 'Master the language that powers the interactive web.',
    description:
      'Start from variables and functions, then learn to work with arrays, objects and the DOM to make pages respond to users.',
    outcomes: [
      'Use variables, types and operators',
      'Write functions and work with arrays',
      'Select and change elements on a page',
      'Respond to clicks and other events'
    ],
    lessons: [
      {
        id: 'variables-and-types',
        title: 'Variables and Types',
        duration: '10 min',
        content: [
          {
            type: 'p',
            text: 'Use const for values that never get reassigned and let for values that change. Avoid var in new code.'
          },
          {
            type: 'code',
            text: 'const name = "Asha"\nlet score = 10\nscore = score + 5\n\nconst isPassed = score >= 12\nconsole.log(name, score, isPassed)'
          },
          {
            type: 'p',
            text: 'The main types are string, number, boolean, null, undefined, object and array.'
          }
        ]
      },
      {
        id: 'functions-and-arrays',
        title: 'Functions and Arrays',
        duration: '14 min',
        content: [
          {
            type: 'p',
            text: 'Functions package reusable logic. Arrays hold lists, and methods like map, filter and reduce let you transform them without writing loops by hand.'
          },
          {
            type: 'code',
            text: 'const prices = [120, 80, 250, 40]\n\nconst withTax = prices.map((p) => p * 1.18)\nconst cheap = prices.filter((p) => p < 100)\nconst total = prices.reduce((sum, p) => sum + p, 0)'
          }
        ]
      },
      {
        id: 'dom-and-events',
        title: 'The DOM and Events',
        duration: '16 min',
        content: [
          {
            type: 'p',
            text: 'The DOM is the live tree of elements the browser builds from your HTML. JavaScript can find elements, change them and listen for what the user does.'
          },
          {
            type: 'code',
            text: 'const button = document.querySelector("#like")\nconst count = document.querySelector("#count")\nlet likes = 0\n\nbutton.addEventListener("click", () => {\n  likes++\n  count.textContent = likes\n})'
          },
          {
            type: 'tip',
            text: 'Try this in the browser console on any page to feel how the DOM can be changed live.'
          }
        ]
      }
    ]
  },
  {
    id: 'react-from-scratch',
    title: 'React from Scratch',
    category: 'Web Development',
    level: 'Intermediate',
    duration: '5 hours',
    instructor: 'Priya Nair',
    rating: 4.9,
    students: 15200,
    icon: '⚛️',
    colors: ['#0ea5e9', '#6366f1'],
    summary: 'Build dynamic interfaces with components and hooks.',
    description:
      'Break a UI into small reusable components, manage state with hooks and render content dynamically from data.',
    outcomes: [
      'Build reusable components with props',
      'Manage state with useState',
      'Handle side effects with useEffect',
      'Render lists and conditional content'
    ],
    lessons: [
      {
        id: 'components-and-jsx',
        title: 'Components and JSX',
        duration: '12 min',
        content: [
          {
            type: 'p',
            text: 'A component is a function that returns JSX, a syntax that looks like HTML but lives inside JavaScript. Props let a parent pass data down to a child.'
          },
          {
            type: 'code',
            text: 'function CourseCard({ title, level }) {\n  return (\n    <div className="card">\n      <h3>{title}</h3>\n      <span>{level}</span>\n    </div>\n  )\n}\n\nfunction App() {\n  return <CourseCard title="React" level="Intermediate" />\n}'
          }
        ]
      },
      {
        id: 'state-with-usestate',
        title: 'State with useState',
        duration: '15 min',
        content: [
          {
            type: 'p',
            text: 'State is data that changes over time. When state changes, React re-renders the component so the screen stays in sync, with no page refresh.'
          },
          {
            type: 'code',
            text: 'import { useState } from "react"\n\nfunction Counter() {\n  const [count, setCount] = useState(0)\n\n  return (\n    <button onClick={() => setCount(count + 1)}>\n      Clicked {count} times\n    </button>\n  )\n}'
          },
          {
            type: 'tip',
            text: 'Never change state directly. Always use the setter function so React knows to update.'
          }
        ]
      },
      {
        id: 'effects-with-useeffect',
        title: 'Effects with useEffect',
        duration: '18 min',
        content: [
          {
            type: 'p',
            text: 'useEffect runs code after rendering, which is where you fetch data, start timers or talk to the browser. The dependency array controls when it runs again.'
          },
          {
            type: 'code',
            text: 'function Courses() {\n  const [courses, setCourses] = useState([])\n  const [loading, setLoading] = useState(true)\n\n  useEffect(() => {\n    fetch("/api/courses")\n      .then((res) => res.json())\n      .then((data) => {\n        setCourses(data)\n        setLoading(false)\n      })\n  }, [])\n\n  if (loading) return <p>Loading...</p>\n  return courses.map((c) => <p key={c.id}>{c.title}</p>)\n}'
          }
        ]
      }
    ]
  },
  {
    id: 'nodejs-express-apis',
    title: 'Node.js & Express APIs',
    category: 'Web Development',
    level: 'Intermediate',
    duration: '4 hours',
    instructor: 'Karan Verma',
    rating: 4.6,
    students: 9800,
    icon: '🟢',
    colors: ['#10b981', '#0ea5e9'],
    summary: 'Create fast backend APIs your front end can talk to.',
    description:
      'Set up a Node.js server with Express, define routes, read parameters and add middleware to build a clean REST API.',
    outcomes: [
      'Run a server with Express',
      'Define routes and read parameters',
      'Use middleware for logging and errors',
      'Return JSON to a front end'
    ],
    lessons: [
      {
        id: 'first-server',
        title: 'Your First Server',
        duration: '10 min',
        content: [
          {
            type: 'p',
            text: 'Express is a small library that makes it easy to handle web requests in Node.js. Install it with npm, then create an app and tell it to listen on a port.'
          },
          {
            type: 'code',
            text: 'import express from "express"\n\nconst app = express()\n\napp.get("/", (req, res) => {\n  res.send("Hello from Express")\n})\n\napp.listen(3000, () => console.log("Running on 3000"))'
          }
        ]
      },
      {
        id: 'routes-and-params',
        title: 'Routes and Params',
        duration: '13 min',
        content: [
          {
            type: 'p',
            text: 'A route connects a URL and an HTTP method to a function. Route params like :id capture parts of the URL, and query strings carry optional values.'
          },
          {
            type: 'code',
            text: 'const courses = [{ id: 1, title: "React" }]\n\napp.get("/api/courses", (req, res) => res.json(courses))\n\napp.get("/api/courses/:id", (req, res) => {\n  const course = courses.find((c) => c.id === Number(req.params.id))\n  if (!course) return res.status(404).json({ error: "Not found" })\n  res.json(course)\n})'
          }
        ]
      },
      {
        id: 'middleware',
        title: 'Middleware',
        duration: '12 min',
        content: [
          {
            type: 'p',
            text: 'Middleware are functions that run between the request and your route. They can log requests, check logins, parse bodies and catch errors.'
          },
          {
            type: 'code',
            text: 'app.use(express.json())\n\napp.use((req, res, next) => {\n  console.log(req.method, req.url)\n  next()\n})'
          },
          {
            type: 'tip',
            text: 'Always call next() unless you are sending a response, or the request will hang.'
          }
        ]
      }
    ]
  },
  {
    id: 'python-for-beginners',
    title: 'Python for Beginners',
    category: 'Programming',
    level: 'Beginner',
    duration: '4 hours',
    instructor: 'Sneha Kulkarni',
    rating: 4.8,
    students: 22100,
    icon: '🐍',
    colors: ['#3b82f6', '#facc15'],
    summary: 'Learn programming with the friendliest language around.',
    description:
      'Write your first programs, make decisions with conditions, repeat work with loops and organize code into functions.',
    outcomes: [
      'Store and print values',
      'Make decisions with if statements',
      'Repeat tasks with loops',
      'Write your own functions'
    ],
    lessons: [
      {
        id: 'variables-and-input',
        title: 'Variables and Input',
        duration: '9 min',
        content: [
          {
            type: 'p',
            text: 'A variable is a name that points to a value. Python figures out the type for you, and input() lets a program ask the user for text.'
          },
          {
            type: 'code',
            text: 'name = input("Your name: ")\nage = int(input("Your age: "))\n\nprint("Hello,", name)\nprint("Next year you will be", age + 1)'
          }
        ]
      },
      {
        id: 'loops-and-conditions',
        title: 'Loops and Conditions',
        duration: '14 min',
        content: [
          {
            type: 'p',
            text: 'Use if, elif and else to choose between paths, and for or while to repeat work. Indentation is how Python groups code, so keep it consistent.'
          },
          {
            type: 'code',
            text: 'for number in range(1, 6):\n    if number % 2 == 0:\n        print(number, "is even")\n    else:\n        print(number, "is odd")'
          }
        ]
      },
      {
        id: 'functions-and-lists',
        title: 'Functions and Lists',
        duration: '15 min',
        content: [
          {
            type: 'p',
            text: 'Lists store ordered collections. Functions let you name a piece of logic and reuse it anywhere.'
          },
          {
            type: 'code',
            text: 'def average(numbers):\n    return sum(numbers) / len(numbers)\n\nmarks = [72, 85, 90, 64]\nmarks.append(78)\nprint(average(marks))'
          },
          {
            type: 'tip',
            text: 'Give functions clear names like average or find_user so your code reads like plain English.'
          }
        ]
      }
    ]
  },
  {
    id: 'data-structures-algorithms',
    title: 'Data Structures & Algorithms',
    category: 'Programming',
    level: 'Intermediate',
    duration: '6 hours',
    instructor: 'Vikram Shah',
    rating: 4.7,
    students: 14300,
    icon: '🧩',
    colors: ['#8b5cf6', '#ec4899'],
    summary: 'Think like an engineer and write efficient code.',
    description:
      'Understand how fast code runs, choose the right data structure and learn core algorithms used in interviews and real systems.',
    outcomes: [
      'Read and compare Big O complexity',
      'Choose between arrays and hash maps',
      'Apply binary search',
      'Solve problems more efficiently'
    ],
    lessons: [
      {
        id: 'big-o',
        title: 'Big O Notation',
        duration: '12 min',
        content: [
          {
            type: 'p',
            text: 'Big O describes how the work grows as the input grows. O(1) stays constant, O(n) grows in line with the input, and O(n squared) grows much faster.'
          },
          {
            type: 'code',
            text: 'function hasDuplicate(list) {\n  for (let i = 0; i < list.length; i++) {\n    for (let j = i + 1; j < list.length; j++) {\n      if (list[i] === list[j]) return true\n    }\n  }\n  return false\n}'
          },
          {
            type: 'p',
            text: 'The two nested loops make this O(n squared). In the next lesson you will make it O(n).'
          }
        ]
      },
      {
        id: 'arrays-and-hash-maps',
        title: 'Arrays and Hash Maps',
        duration: '15 min',
        content: [
          {
            type: 'p',
            text: 'A hash map stores key and value pairs and finds a key in about constant time. Using one often turns a slow nested loop into a single pass.'
          },
          {
            type: 'code',
            text: 'function hasDuplicate(list) {\n  const seen = new Set()\n  for (const item of list) {\n    if (seen.has(item)) return true\n    seen.add(item)\n  }\n  return false\n}'
          }
        ]
      },
      {
        id: 'binary-search',
        title: 'Binary Search',
        duration: '14 min',
        content: [
          {
            type: 'p',
            text: 'When a list is sorted, you can find a value by repeatedly checking the middle and throwing away half. That makes it O(log n).'
          },
          {
            type: 'code',
            text: 'function binarySearch(sorted, target) {\n  let low = 0\n  let high = sorted.length - 1\n\n  while (low <= high) {\n    const mid = Math.floor((low + high) / 2)\n    if (sorted[mid] === target) return mid\n    if (sorted[mid] < target) low = mid + 1\n    else high = mid - 1\n  }\n  return -1\n}'
          }
        ]
      }
    ]
  },
  {
    id: 'data-analysis-pandas',
    title: 'Data Analysis with Pandas',
    category: 'Data Science',
    level: 'Intermediate',
    duration: '5 hours',
    instructor: 'Meera Iyer',
    rating: 4.8,
    students: 11200,
    icon: '📊',
    colors: ['#14b8a6', '#6366f1'],
    summary: 'Turn raw spreadsheets into clear answers.',
    description:
      'Load data, clean it, group it and summarize it with pandas, the most popular data analysis library for Python.',
    outcomes: [
      'Load CSV files into DataFrames',
      'Clean missing and messy values',
      'Group and summarize data',
      'Answer questions with real data'
    ],
    lessons: [
      {
        id: 'loading-data',
        title: 'Loading Data',
        duration: '10 min',
        content: [
          {
            type: 'p',
            text: 'A DataFrame is a table with rows and labeled columns. The first things to do with new data are to look at it and check its shape.'
          },
          {
            type: 'code',
            text: 'import pandas as pd\n\ndf = pd.read_csv("sales.csv")\nprint(df.head())\nprint(df.shape)\nprint(df.describe())'
          }
        ]
      },
      {
        id: 'cleaning-data',
        title: 'Cleaning Data',
        duration: '14 min',
        content: [
          {
            type: 'p',
            text: 'Real data is messy. You will often need to drop duplicates, fill missing values and fix column types before any analysis.'
          },
          {
            type: 'code',
            text: 'df = df.drop_duplicates()\ndf["price"] = df["price"].fillna(df["price"].median())\ndf["date"] = pd.to_datetime(df["date"])\ndf = df.dropna(subset=["customer"])'
          },
          {
            type: 'tip',
            text: 'Always check how many rows you removed so you know what your cleaning changed.'
          }
        ]
      },
      {
        id: 'grouping-data',
        title: 'Grouping and Summarizing',
        duration: '13 min',
        content: [
          {
            type: 'p',
            text: 'groupby splits your data into groups, applies a calculation to each, and combines the results. It is the pandas version of a pivot table.'
          },
          {
            type: 'code',
            text: 'by_region = df.groupby("region")["revenue"].sum()\nprint(by_region.sort_values(ascending=False))\n\nsummary = df.groupby("category").agg(\n    orders=("id", "count"),\n    average=("revenue", "mean")\n)'
          }
        ]
      }
    ]
  },
  {
    id: 'ui-ux-design-basics',
    title: 'UI & UX Design Basics',
    category: 'Design',
    level: 'Beginner',
    duration: '3 hours',
    instructor: 'Isha Kapoor',
    rating: 4.7,
    students: 8700,
    icon: '✏️',
    colors: ['#ec4899', '#f59e0b'],
    summary: 'Design interfaces people find clear and enjoyable.',
    description:
      'Learn the principles behind good interfaces: hierarchy, color, typography and spacing, then apply them to your own screens.',
    outcomes: [
      'Guide attention with visual hierarchy',
      'Pick readable colors and fonts',
      'Use spacing to group content',
      'Review designs with a critical eye'
    ],
    lessons: [
      {
        id: 'visual-hierarchy',
        title: 'Visual Hierarchy',
        duration: '9 min',
        content: [
          {
            type: 'p',
            text: 'Visual hierarchy tells people what to look at first. Size, weight, color and position all signal importance, so the most important thing should be the most noticeable.'
          },
          {
            type: 'tip',
            text: 'Squint at your design. Whatever you can still see clearly is what your hierarchy is saying matters most.'
          }
        ]
      },
      {
        id: 'color-and-type',
        title: 'Color and Typography',
        duration: '12 min',
        content: [
          {
            type: 'p',
            text: 'Choose one main color, one accent and a set of neutrals. Keep enough contrast between text and background so everything is easy to read.'
          },
          {
            type: 'p',
            text: 'Stick to one or two typefaces. Use size and weight, not many different fonts, to create variety.'
          }
        ]
      },
      {
        id: 'layout-and-spacing',
        title: 'Layout and Spacing',
        duration: '11 min',
        content: [
          {
            type: 'p',
            text: 'Related items should sit close together, and unrelated items should have more space between them. A consistent spacing scale such as 8, 16, 24 and 32 pixels makes a design feel tidy.'
          },
          {
            type: 'code',
            text: ':root {\n  --space-1: 8px;\n  --space-2: 16px;\n  --space-3: 24px;\n  --space-4: 32px;\n}'
          }
        ]
      }
    ]
  }
]
