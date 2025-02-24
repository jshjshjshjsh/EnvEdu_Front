import { Button } from "react-bootstrap";
import "./DrawGraph.scss";
import FormCheckInput from "react-bootstrap/esm/FormCheckInput";
import { useState } from "react";
import ExampleGraph from "./ExampleGraph";

function GraphSelectionModal({
  setSelectedGraph,
  setIsVisibleModal,
  selectedGraph,
  next,
}) {
  const [graphIdx, setGraphIdx] = useState(selectedGraph);
  const graphs = [
    "막대 그래프",
    "꺾은선 그래프",
    "버블 그래프",
    "원 그래프",
    "산점도",
    "막대와 꺽은선의 혼합 그래프",
  ];
  const onClickCreateGraphBtn = () => {
    const drawGraph = JSON.parse(localStorage.getItem("drawGraph"));

    localStorage.setItem(
      "drawGraph",
      JSON.stringify({
        ...drawGraph,
        selectedGraph: graphIdx,
      })
    );

    setSelectedGraph(graphIdx);
    setIsVisibleModal(state => !state);
    next();
  };
  return (
    <>
      <div
        onClick={() => setIsVisibleModal(state => !state)}
        className="overlay"
      ></div>
      <div className="graph-selection-modal">
        <div className="block">
          <div className="header">그래프 유형</div>
          <div className="graphs">
            {graphs.map((graph, idx) => (
              <div className="graph" key={idx + graph}>
                <ExampleGraph type={idx} />
                <label className="checkboxGraph">
                  <FormCheckInput
                    checked={graphIdx === idx}
                    id={graph}
                    onChange={() => setGraphIdx(idx)}
                  />
                  <span>{graph}</span>
                </label>
              </div>
            ))}
          </div>
          <Button onClick={onClickCreateGraphBtn}>그래프 생성하기</Button>
        </div>
      </div>
      ;
    </>
  );
}

export default GraphSelectionModal;
