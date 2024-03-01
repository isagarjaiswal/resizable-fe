import React, { useEffect, useState } from "react";
import SampleSplitter from "../splitter/splitter";
import { useResizable } from "react-resizable-layout";
import "./resizeable.css";
import Card from "../card/card";
import CountCard from "../count/countCard";
import DataList from "../dataList/dataList";

const Resizeable = () => {
  const [isUpdated, setIsUpdated] = useState(false);
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
    initial: 250,
    min: 50,
    reverse: true,
  });
  useEffect(() => {
    console.log({ isUpdated });
  }, [isUpdated]);
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
          <Card setIsUpdated={setIsUpdated}  isUpdated={isUpdated}/>
        </div>
        <SampleSplitter isDragging={isFileDragging} {...fileDragBarProps} />
        <div className={"flex grow"}>
          <div
            className={`shrink-0 contents, ${isPluginDragging && "dragging"} `}
            style={{ width: pluginW }}
          >
            <DataList isUpdated={isUpdated}/>
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
        <CountCard isUpdated={isUpdated} />
      </div>
    </div>
  );
};

export default Resizeable;
