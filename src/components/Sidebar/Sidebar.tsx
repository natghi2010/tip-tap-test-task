import React from "react";
import "./Sidebar.less";
import Button from "../Button/Button";
import { Editor } from "@tiptap/react";

interface SidebarProps {
  editor: Editor | null;
}

const Sidebar: React.FC<SidebarProps> = ({ editor }) => {
  return (
    <div className="sidebar">
      <div className="sidebarTop">
        <img src="/icons/GAIA.png" />
        <hr className="hrline" />
        <div className="profile">
          <img src="/profile.jpeg" />
        </div>
      </div>

      <div className="editorButtonsContainer">
        <hr className="hrline" />
        <Button
          icon="icons/bold.png"
          onClick={() => {
            if (editor) {
              editor.chain().focus().toggleBold().run();
            }
          }}
        />
        <Button
          icon="icons/underline.png"
          onClick={() => {
            if (editor) {
              editor.chain().focus().toggleUnderline().run();
            }
          }}
        />

        <Button
          icon="icons/italic.png"
          onClick={() => {
            if (editor) {
              editor.chain().focus().toggleItalic().run();
            }
          }}
        />
        <Button icon="icons/function.png" onClick={() => {}} />
        <Button
          icon="icons/parentesis.png"
          onClick={() => {
            if (editor) {
              editor.chain().focus().toggleCodeBlock().run();
            }
          }}
        />
        <Button icon="icons/link.png" onClick={() => {}} />
        <hr className="hrline" />
      </div>
      <div></div>
    </div>
  );
};

export default Sidebar;
