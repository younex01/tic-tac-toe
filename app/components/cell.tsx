import { Dispatch, SetStateAction } from "react";

type CellProps = {
    id: number;
    go: string;
    setGo: Dispatch<SetStateAction<string>>
    cells: string[];
    setCells:Dispatch<SetStateAction<string[]>>;
    cell:string;
    winning: string;
}

const Cell = ({id, go, setGo, cells, setCells, cell, winning}: CellProps) =>{



    const handelClick = (e) =>
    {
        const notTaken = !cells[id]
        if (notTaken && !winning)
        {
            if (go === "circle")
            {
                handelCellChange("circle")
                setGo("cross")
            }else if(go === "cross")
            {
                handelCellChange("cross")
                setGo("circle")
            }
        }
    }

    const handelCellChange = (cellTochange: string) => {
        let copyCells = [...cells]
        copyCells[id] = cellTochange
        setCells(copyCells)
    }

    return <div className="square" onClick={handelClick}>
        <div className={cell}>{cell? (cell === "circle" ? "o": "x") : ""}</div>
    </div>
}

export default Cell;