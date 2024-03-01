import React from "react";
import SampleSplitter from "../splitter/splitter";
import { useResizable } from "react-resizable-layout";
import "./resizeable.css";
import Card from "../card/card";

const Resizeable = () => {
  const {
    isDragging: isTerminalDragging,
    position: terminalH,
    splitterProps: terminalDragBarProps,
  } = useResizable({
    axis: "y",
    initial: 150,
    min: 50,
    reverse: true,
  });
  const {
    isDragging: isFileDragging,
    position: fileW,
    splitterProps: fileDragBarProps,
  } = useResizable({
    axis: "x",
    initial: 250,
    min: 50,
  });
  const {
    isDragging: isPluginDragging,
    position: pluginW,
    splitterProps: pluginDragBarProps,
  } = useResizable({
    axis: "x",
    initial: 200,
    min: 50,
    reverse: true,
  });

  return (
    <div
      className={
        "flex flex-column h-screen bg-dark font-mono color-white overflow-hidden"
      }
    >
      <div className={"flex grow"}>
        <div
          className={`shrink-0 contents, ${isFileDragging && "dragging"} `}
          style={{ width: fileW }}
        >
          <Card />
        </div>
        <SampleSplitter isDragging={isFileDragging} {...fileDragBarProps} />
        <div className={"flex grow"}>
          <div
            className={`shrink-0 contents, ${isPluginDragging && "dragging"} `}
            style={{ width: pluginW }}
          >
            <Card />
          </div>
        </div>
      </div>

      <SampleSplitter
        dir={"horizontal"}
        isDragging={isTerminalDragging}
        {...terminalDragBarProps}
      />
      <div
        className={`shrink-0 contents, ${isTerminalDragging && "dragging"} `}
        style={{ height: terminalH }}
      >
        <Card />
      </div>
    </div>
  );
};

export default Resizeable;
