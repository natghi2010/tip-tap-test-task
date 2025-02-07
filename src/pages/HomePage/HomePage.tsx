import React from "react";
import "./HomePage.less";
import Sidebar from "../../components/Sidebar/Sidebar";
import Editor from "../../components/Editor/EditorBox";
import Chatbox from "../../components/Chatbox/Chatbox";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import { all, createLowlight } from "lowlight";
import Placeholder from "@tiptap/extension-placeholder";

import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";

// import "highlight.js/styles/github.css";

const HomePage: React.FC = () => {
  const lowlight = createLowlight(all);

  const editor = useEditor({
    extensions: [
      Document,
      Paragraph,
      Text,
      StarterKit,
      Underline,
      CodeBlockLowlight.configure({
        lowlight,
      }),

      Placeholder.configure({
        placeholder: "Ask Doe anything you’d like about the world...",
      }),
    ],
    content: "",
    autofocus: true,
    editable: true,
  });
  return (
    <main className="main">
      <Sidebar editor={editor} />
      <div className="container">
        <Chatbox />
        <Editor editor={editor} />
      </div>
    </main>
  );
};

export default HomePage;
