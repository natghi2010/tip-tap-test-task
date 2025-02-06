import React from "react";
import { EditorContent, Editor } from "@tiptap/react";
import "./Editor.less";

interface EditorProps {
  editor: Editor | null;
}
const EditorBox: React.FC<EditorProps> = ({ editor }) => {
  if (!editor) {
    return null;
  }
  return (
    <div className="editor-container">
      <div className="editor">
        <div className="flex">
          <button className="buttonStar">
            <img src="/icons/ICONS.svg" />
          </button>
          <EditorContent editor={editor} className="editor-content" />
        </div>
        <div className="flex">
          <button className="buttonFile">
            <img src="icons/file.svg" />
          </button>

          <button className="buttonMic">
            <img src="icons/mic.svg" />
          </button>

          <button className="buttonSend">
            Send <img src="icons/arrowtop.svg" />
          </button>
        </div>
      </div>
    </div>
    // <div className="editor-container">
    //   <div className="editor-toolbar">
    //     <button onClick={() => editor.chain().focus().toggleBold().run()}>Bold</button>
    //     <button onClick={() => editor.chain().focus().toggleItalic().run()}>Italic</button>
    //     <button onClick={() => editor.chain().focus().toggleStrike().run()}>Strike</button>
    //   </div>
    //   <EditorContent editor={editor} className="editor-content" />
    // </div>
  );
};

export default EditorBox;
