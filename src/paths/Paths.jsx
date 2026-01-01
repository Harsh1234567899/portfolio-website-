import App from "../App.jsx"
import DocsLayout from "../code/DocsLayout.jsx"
import Git from "../code/git/Git.jsx"
import Basics from "../code/js/Basics.jsx"
import ControllStatement from "../code/js/ControllStatement.jsx"
import Dom from "../code/js/Dom.jsx"
import Functions from "../code/js/Functions.jsx"
import Loops from "../code/js/Loops.jsx"
import Events from '../code/js/Events.jsx'
import Api from "../code/js/Api.jsx"
import OOPS from "../code/js/OOPS.jsx"
const Paths = [
    {
    path: '/',
    element: <App/>,
  },
  {
    path: '/code',
    element: <DocsLayout/>,
    children: [
      {
        path: 'javascript',
        children: [
          {
            path: 'basics',
            element: <Basics/>
          },
          {
            path: 'functions',
            element: <Functions/>
          },
          {
            path: 'controllers',
            element: <ControllStatement/>
          },
          {
            path: 'loops',
            element: <Loops/>
          },
          {
            path: 'dom',
            element: <Dom/>
          },
          {
            path: 'events',
            element: <Events/>
          },
          {
            path: 'api',
            element: <Api/>
          },
          {
            path: 'oops',
            element: <OOPS/>
          },
        ]
      },
      {
        path: 'git',
        element: <Git/>
      }
    ]
  }
]
export default Paths