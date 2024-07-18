import { useEffect, useState } from "react";
import ColorPicker from "../components/ColorPicker";
import Sum from "../components/sum";

export default function Hi() {

    Sum(1, 2)
    return (
        <>

            <ColorPicker myprps={"red"} />

        </>
    )
}