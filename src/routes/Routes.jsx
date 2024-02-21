import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Signup/SignUp";
import JavascriptQuestions from "../pages/JavascriptQuestions";
import ES6Questions from "../pages/ES6Questions";
import ReactQuestions from "../pages/ReactQuestions";
import NodeQuestions from "../pages/NodeQuestions";
import ExpressJSQuestions from "../pages/ExpressJSQuestions";
import MongoDBQuestion from "../pages/MongoDBQuestion";
import NextJSQuestions from "../pages/NextJSQuestions";
import AdvanceTopic from "../pages/AdvanceTopic";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        errorElement: <ErrorPage />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "/advance-topic",
            element: <AdvanceTopic />,
          },
          {
            path: "/js-question",
            element: <JavascriptQuestions />,
          },
          {
            path: "/es6-question",
            element: <ES6Questions />,
          },
          {
            path: "/react-question",
            element: <ReactQuestions />,
          },
          {
            path: "/node-question",
            element: <NodeQuestions />,
          },
          {
            path: "/express-question",
            element: <ExpressJSQuestions />,
          },
          {
            path: "/mongo-question",
            element: <MongoDBQuestion />,
          },
          {
            path: "/next-question",
            element: <NextJSQuestions />,
          },
          
        ]
    },
    {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
  ]);


  export default router;